import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { city, email } from '@/shared/config/contacts'
import { RequestForm } from '@/features/project-request'
import styles from './RequestSection.module.css'

export function RequestSection() {
  return (
    <Section id="request" tone className={styles.lead}>
      <div>
        <SectionHeading
          title="Рассчитаем стоимость вашего проекта"
          description="Опишите объект — ответим в течение рабочего дня и назовём стоимость и сроки."
        />
        <dl className={styles.contacts}>
          <div>
            <dt>Почта</dt>
            <dd>
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </div>
          <div>
            <dt>Город</dt>
            <dd>{city}</dd>
          </div>
        </dl>
      </div>
      <RequestForm />
    </Section>
  )
}
