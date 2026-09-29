import { Container } from '@/shared/ui/Container'
import { footer } from '@/shared/config/contacts'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.bar}>
        <span>{footer.copyright}</span>
        <span>{footer.legal}</span>
      </Container>
    </footer>
  )
}
