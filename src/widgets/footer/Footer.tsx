import { Container } from '@/shared/ui/Container'
import { Wordmark } from '@/shared/ui/Wordmark'
import { legal } from '@/shared/config/contacts'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.bar}>
        <Wordmark className={styles.mark} />
        <span>{legal}</span>
      </Container>
    </footer>
  )
}
