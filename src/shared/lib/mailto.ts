import { email } from '@/shared/config/contacts'

interface MailtoParams {
  subject: string
  body?: string
}

export function buildMailto({ subject, body }: MailtoParams) {
  const params = [`subject=${encodeURIComponent(subject)}`]
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${email}?${params.join('&')}`
}
