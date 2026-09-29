export interface NavLink {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: '#services', label: 'Услуги' },
  { href: '#designers', label: 'Дизайнерам' },
  { href: '#works', label: 'Проекты' },
  { href: '#prices', label: 'Цены' },
]

export const primaryCtaHref = '#contact'
