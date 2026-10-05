import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { Wordmark } from '@/shared/ui/Wordmark'
import { email } from '@/shared/config/contacts'
import { navLinks, primaryCtaHref } from '@/shared/config/navigation'
import { ThemeToggle } from '@/features/theme-toggle'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.top}>
      <Container className={styles.bar}>
        <Wordmark href="#" ariaLabel="MELNIK — наверх" className={styles.mark} />
        <nav className={styles.menu} aria-label="Разделы">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className={styles.mail} href={`mailto:${email}`}>
          {email}
        </a>
        <ThemeToggle />
        <Button href={primaryCtaHref} className={styles.cta}>
          Рассчитать стоимость
        </Button>
      </Container>
    </header>
  )
}
