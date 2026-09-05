'use client'

import { FormEvent, useMemo, useRef, useState } from 'react'
import { ArrowRight, ImagePlus, MessageCircle, X } from 'lucide-react'
import { CONTACT } from '@/lib/data'
import {
  buildQuoteMessage,
  shareToWhatsAppWithFiles,
  type QuoteFormPayload,
} from '@/lib/whatsapp'

const PROJECT_TYPES = [
  'Landing page 699 €',
  'Création SaaS',
  'Site Web',
  'CRM Sur Mesure',
  'Application & PWA',
  'Refonte de Site',
  'Référencement SEO',
  'Autre',
]

const MAX_IMAGES = 6
const MAX_SIZE_MB = 8

type Preview = { file: File; url: string }

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [requestType, setRequestType] = useState<'devis' | 'renseignement'>('devis')
  const [previews, setPreviews] = useState<Preview[]>([])
  const [status, setStatus] = useState<'idle' | 'sending' | 'hint' | 'error'>('idle')
  const [hint, setHint] = useState('')

  const whatsappReady = useMemo(
    () => CONTACT.whatsapp.length >= 11 && !CONTACT.whatsapp.endsWith('00000000'),
    [],
  )

  function onFilesSelected(list: FileList | null) {
    if (!list?.length) return
    const next: Preview[] = [...previews]
    for (const file of Array.from(list)) {
      if (!file.type.startsWith('image/')) continue
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setStatus('error')
        setHint(`Image trop lourde (max ${MAX_SIZE_MB} Mo) : ${file.name}`)
        continue
      }
      if (next.length >= MAX_IMAGES) break
      next.push({ file, url: URL.createObjectURL(file) })
    }
    setPreviews(next)
    if (fileRef.current) fileRef.current.value = ''
  }

  function removeImage(index: number) {
    setPreviews((prev) => {
      const copy = [...prev]
      URL.revokeObjectURL(copy[index].url)
      copy.splice(index, 1)
      return copy
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const fd = new FormData(form)

    const payload: QuoteFormPayload = {
      firstName: String(fd.get('firstName') || '').trim(),
      lastName: String(fd.get('lastName') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      projectType: String(fd.get('projectType') || '').trim(),
      requestType,
      message: String(fd.get('message') || '').trim(),
      imageNames: previews.map((p) => p.file.name),
    }

    if (!payload.firstName || !payload.message) {
      setStatus('error')
      setHint('Merci de renseigner au moins le prénom et le message.')
      return
    }

    const message = buildQuoteMessage(payload)
    const files = previews.map((p) => p.file)

    try {
      const result = await shareToWhatsAppWithFiles(CONTACT.whatsapp, message, files)

      if (result === 'opened' && files.length > 0) {
        setStatus('hint')
        setHint(
          `WhatsApp s'ouvre avec votre message. Joignez maintenant vos ${files.length} photo(s) dans la conversation (trombone / galerie).`,
        )
      } else {
        setStatus('idle')
        setHint('')
      }
    } catch {
      setStatus('error')
      setHint("Impossible d'ouvrir WhatsApp. Vérifiez que l'application est installée.")
    }
  }

  return (
    <form
      className={`border border-stone-200 bg-white p-8 md:p-10 ${compact ? '' : 'max-w-2xl'}`}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
        Devis & renseignements
      </p>
      <h3 className="font-display text-2xl font-semibold tracking-tight text-stone-900 mb-2">
        Envoyer via WhatsApp
      </h3>
      <p className="text-sm text-stone-500 mb-6">
        Plus d&apos;email : votre demande s&apos;ouvre directement dans WhatsApp, avec vos photos du
        chantier ou de votre site actuel.
      </p>

      <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-px">
        <button
          type="button"
          onClick={() => setRequestType('devis')}
          className={`p-4 text-left font-mono text-[10px] uppercase tracking-widest transition-colors ${
            requestType === 'devis' ? 'bg-accent text-white' : 'bg-white text-stone-600 hover:bg-stone-50'
          }`}
        >
          Demande de devis
        </button>
        <button
          type="button"
          onClick={() => setRequestType('renseignement')}
          className={`p-4 text-left font-mono text-[10px] uppercase tracking-widest transition-colors ${
            requestType === 'renseignement'
              ? 'bg-accent text-white'
              : 'bg-white text-stone-600 hover:bg-stone-50'
          }`}
        >
          Renseignement
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200 border border-stone-200 border-t-0 mb-px">
        <div className="bg-white p-4">
          <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">
            Prénom *
          </label>
          <input
            name="firstName"
            required
            type="text"
            autoComplete="given-name"
            className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2 focus:border-stone-900 transition-colors"
          />
        </div>
        <div className="bg-white p-4">
          <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">
            Nom *
          </label>
          <input
            name="lastName"
            required
            type="text"
            autoComplete="family-name"
            className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2 focus:border-stone-900 transition-colors"
          />
        </div>
        <div className="bg-white p-4">
          <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">
            Téléphone *
          </label>
          <input
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2 focus:border-stone-900 transition-colors"
          />
        </div>
        <div className="bg-white p-4">
          <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2 focus:border-stone-900 transition-colors"
          />
        </div>
      </div>

      <div className="border border-stone-200 border-t-0 p-4 mb-px bg-white">
        <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">
          Type de projet *
        </label>
        <select
          name="projectType"
          required
          className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2"
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionnez…
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="border border-stone-200 border-t-0 p-4 mb-px bg-white">
        <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet, vos délais, votre budget indicatif…"
          className="w-full bg-transparent text-stone-900 text-sm outline-none resize-none"
        />
      </div>

      {/* Photos chantier / références */}
      <div className="border border-stone-200 border-t-0 p-4 mb-6 bg-stone-50">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-1">
              Photos du chantier / références
            </label>
            <p className="text-xs text-stone-500 leading-relaxed">
              Ajoutez jusqu&apos;à {MAX_IMAGES} images (site actuel, maquettes, photos). Sur mobile,
              elles partent avec WhatsApp ; sur ordinateur, joignez-les dans la conversation après
              l&apos;ouverture.
            </p>
          </div>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="shrink-0 inline-flex items-center gap-2 px-3 py-2 bg-white border border-stone-200 font-mono text-[10px] uppercase tracking-widest text-stone-700 hover:border-accent hover:text-accent transition-colors"
          >
            <ImagePlus size={14} />
            Ajouter
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            capture="environment"
            className="hidden"
            onChange={(e) => onFilesSelected(e.target.files)}
          />
        </div>

        {previews.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {previews.map((p, i) => (
              <div key={p.url} className="relative aspect-square border border-stone-200 bg-white overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt={p.file.name} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 w-6 h-6 bg-stone-900/80 text-white flex items-center justify-center hover:bg-accent"
                  aria-label="Retirer l'image"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {!whatsappReady && (
        <p className="text-xs text-brand-amber mb-4 bg-amber-50 border border-amber-200 p-3">
          Configurez votre numéro WhatsApp (`NEXT_PUBLIC_WHATSAPP_NUMBER` ou `CONTACT.whatsapp` dans
          data.ts) au format 336XXXXXXXX.
        </p>
      )}

      {(status === 'hint' || status === 'error') && hint && (
        <p
          className={`text-sm mb-4 p-3 border ${
            status === 'error'
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-accent-light border-accent/30 text-accent'
          }`}
        >
          {hint}
        </p>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
        <MessageCircle size={15} strokeWidth={1.5} />
        {status === 'sending' ? 'Ouverture…' : 'Envoyer sur WhatsApp'}
        <ArrowRight size={15} strokeWidth={1.5} />
      </button>
    </form>
  )
}
