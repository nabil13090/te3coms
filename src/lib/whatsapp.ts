/**
 * Helpers WhatsApp — encodage UTF-8 strict.
 * Ne jamais utiliser escape(), ni stripper les accents (cause des "?").
 * encodeURIComponent une seule fois suffit.
 */

export function normalizeWhatsAppPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  if (digits.startsWith('0') && digits.length === 10) {
    return `33${digits.slice(1)}`
  }
  return digits
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const e164 = normalizeWhatsAppPhone(phone)
  // text = UTF-8 percent-encoded (é → %C3%A9). Pas de double encode.
  const text = encodeURIComponent(message)
  return `https://api.whatsapp.com/send?phone=${e164}&text=${text}`
}

export function openWhatsApp(phone: string, message: string): void {
  const url = buildWhatsAppUrl(phone, message)
  window.open(url, '_blank', 'noopener,noreferrer')
}

export type QuoteFormPayload = {
  firstName: string
  lastName: string
  phone: string
  email: string
  projectType: string
  requestType: 'devis' | 'renseignement'
  message: string
  imageNames: string[]
}

export function buildQuoteMessage(data: QuoteFormPayload): string {
  const lines = [
    data.requestType === 'devis'
      ? 'Bonjour TE3COMS, je souhaite un devis.'
      : 'Bonjour TE3COMS, je souhaite des renseignements.',
    '',
    `Nom : ${data.firstName} ${data.lastName}`.trim(),
    data.phone ? `Téléphone : ${data.phone}` : '',
    data.email ? `Email : ${data.email}` : '',
    data.projectType ? `Type de projet : ${data.projectType}` : '',
    '',
    'Message :',
    data.message || '(aucun détail)',
  ]

  if (data.imageNames.length > 0) {
    lines.push(
      '',
      `Photos du chantier / références (${data.imageNames.length}) :`,
      ...data.imageNames.map((name, i) => `${i + 1}. ${name}`),
      '',
      'Je joins les images dans cette conversation WhatsApp.',
    )
  }

  // Filtrer lignes vides en trop sans casser les accents
  return lines.filter((line, i, arr) => !(line === '' && arr[i - 1] === '')).join('\n')
}

export async function shareToWhatsAppWithFiles(
  phone: string,
  message: string,
  files: File[],
): Promise<'shared' | 'opened'> {
  // Sur mobile, le partage natif permet d'envoyer texte + images vers WhatsApp
  if (
    files.length > 0 &&
    typeof navigator !== 'undefined' &&
    typeof navigator.share === 'function' &&
    typeof navigator.canShare === 'function'
  ) {
    try {
      const shareData: ShareData = { text: message, files, title: 'Demande TE3COMS' }
      if (navigator.canShare(shareData)) {
        await navigator.share(shareData)
        return 'shared'
      }
    } catch (err) {
      // Annulation utilisateur → ne pas ouvrir en double
      if (err instanceof Error && err.name === 'AbortError') {
        return 'shared'
      }
    }
  }

  openWhatsApp(phone, message)
  return 'opened'
}
