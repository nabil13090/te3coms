'use client'

import { ArrowRight } from 'lucide-react'

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={`border border-stone-200 bg-white p-8 md:p-10 ${compact ? '' : 'max-w-2xl'}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">Formulaire</p>
      <h3 className="font-display text-2xl font-semibold tracking-tight text-stone-900 mb-2">
        Votre projet
      </h3>
      <p className="text-sm text-stone-500 mb-8">Réponse sous 24 heures ouvrées.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-px">
        <div className="bg-white p-4">
          <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">Prénom *</label>
          <input required type="text" className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2 focus:border-stone-900 transition-colors" />
        </div>
        <div className="bg-white p-4">
          <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">Nom *</label>
          <input required type="text" className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2 focus:border-stone-900 transition-colors" />
        </div>
        <div className="bg-white p-4">
          <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">Email *</label>
          <input required type="email" className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2 focus:border-stone-900 transition-colors" />
        </div>
        <div className="bg-white p-4">
          <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">Téléphone</label>
          <input type="tel" className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2 focus:border-stone-900 transition-colors" />
        </div>
      </div>

      <div className="border border-stone-200 border-t-0 p-4 mb-px bg-white">
        <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">Type de projet *</label>
        <select required className="w-full bg-transparent text-stone-900 text-sm outline-none border-b border-stone-200 pb-2">
          <option value="">Sélectionnez...</option>
          <option>Création SaaS</option>
          <option>Site Web</option>
          <option>CRM Sur Mesure</option>
          <option>Application & PWA</option>
          <option>Refonte de Site</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="border border-stone-200 border-t-0 p-4 mb-8 bg-white">
        <label className="block font-mono text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-2">Message *</label>
        <textarea
          required
          rows={5}
          placeholder="Décrivez votre projet..."
          className="w-full bg-transparent text-stone-900 text-sm outline-none resize-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Envoyer
        <ArrowRight size={15} strokeWidth={1.5} />
      </button>
    </form>
  )
}
