import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { Button } from '@/shared/ui/Button'
import { PhotoPlaceholder } from '@/shared/ui/PhotoPlaceholder'
import { buildMailto } from '@/shared/lib/mailto'
import styles from './Offer.module.css'

const auditHref = buildMailto({
  subject: 'Проверка сметы на светильники',
  body: 'Здравствуйте! Прикладываю смету для проверки.',
})

const checks = [
  'Отметим лишние и неподходящие позиции',
  'Предложим аналоги, чтобы уложиться в бюджет без потери качества света',
  'Рассчитаем условия поставки оборудования через нас',
]

export function EstimateAuditSection() {
  return (
    <Section id="audit" tone className={styles.offer}>
      <div>
        <SectionHeading
          title="Уже есть смета на светильники?"
          description="Пришлите спецификацию, которую вам подготовили в другой компании. Мы её разберём и вернём с комментариями."
        />
        <ul className={styles.checks}>
          {checks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Button href={auditHref}>Отправить смету на проверку</Button>
        </div>
      </div>
      <PhotoPlaceholder label="Фото светильников или шоурума" ariaLabel="Светильники" className={styles.photo} />
    </Section>
  )
}
