export interface NavLink {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: '#projects', label: 'Проекты' },
  { href: '#steps', label: 'Этапы' },
  { href: '#audit', label: 'Проверка сметы' },
  { href: '#designers', label: 'Дизайнерам' },
  { href: '#faq', label: 'Вопросы' },
]

export const primaryCtaHref = '#request'
