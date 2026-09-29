import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { contactChannels, telegramHref } from '@/shared/config/contacts'
import styles from './ContactSection.module.css'

export function ContactSection() {
  return (
    <section id="contact">
      <Container className={styles.contact}>
        <div className={styles.intro}>
          <h2>Расскажите о проекте</h2>
          <p className="lead">Пришлите планировку или коротко опишите задачу — предложим, с чего начать.</p>
        </div>
        <div>
          <ul className={styles.channels}>
            {contactChannels.map((channel) => (
              <li key={channel.label}>
                <span>{channel.label}</span>
                <a href={channel.href}>{channel.value}</a>
              </li>
            ))}
          </ul>
          <Button href={telegramHref} className={styles.cta}>
            Написать в Telegram
          </Button>
        </div>
      </Container>
    </section>
  )
}
