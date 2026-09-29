import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { navLinks, primaryCtaHref } from '@/shared/config/navigation'
import { useHeaderScrolled } from './lib/useHeaderScrolled'
import styles from './Header.module.css'

export function Header() {
  const scrolled = useHeaderScrolled()
  const headerClasses = scrolled ? `${styles.header} ${styles.scrolled}` : styles.header

  return (
    <header id="top" className={headerClasses}>
      <Container className={styles.bar}>
        <a className={styles.logo} href="#top" aria-label="MELNIK°, свет и тень — на главную">
          <span className={styles.word} aria-hidden="true">
            MELNIK<i className={styles.deg} />
          </span>
          <small aria-hidden="true">свет и тень</small>
        </a>
        <nav className={styles.nav} aria-label="Основное меню">
          {navLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
          <Button href={primaryCtaHref}>Обсудить проект</Button>
        </nav>
      </Container>
    </header>
  )
}
