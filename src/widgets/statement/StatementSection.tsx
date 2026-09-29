import { Container } from '@/shared/ui/Container'
import styles from './StatementSection.module.css'

export function StatementSection() {
  return (
    <section className={styles.statement}>
      <Container>
        <p>Хороший свет не бросается в глаза. Заметно только, когда его не продумали.</p>
      </Container>
    </section>
  )
}
