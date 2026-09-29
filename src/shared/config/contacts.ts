export interface ContactChannel {
  label: string
  value: string
  href: string
}

export const contactChannels: ContactChannel[] = [
  { label: 'Telegram', value: '@username', href: 'https://t.me/username' },
  { label: 'Телефон', value: '+7 (000) 000-00-00', href: 'tel:+70000000000' },
  { label: 'Почта', value: 'me@melniklight.ru', href: 'mailto:me@melniklight.ru' },
]

export const telegramHref = 'https://t.me/username'

export const footer = {
  copyright: '© 2026 MELNIK°, Москва, melnik.studio',
  legal: 'ИП Мельник Илья, ИНН 504723992929',
}
