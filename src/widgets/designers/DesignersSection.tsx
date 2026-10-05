import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { Button } from '@/shared/ui/Button'
import { buildMailto } from '@/shared/lib/mailto'
import styles from './DesignersSection.module.css'

interface DesignerPromise {
  title: string
  description: string
}

const promises: DesignerPromise[] = [
  {
    title: 'Расчёт и чертежи',
    description: 'Светотехнический расчёт и планы расстановки по вашему проекту.',
  },
  {
    title: 'Спецификация под бюджет',
    description: 'Несколько вариантов оборудования, чтобы вам было что предложить заказчику.',
  },
  {
    title: 'Партнёрские условия',
    description: 'Специальные условия на поставку — обсуждаем индивидуально.',
  },
]

const partnershipHref = buildMailto({ subject: 'Сотрудничество с дизайнером' })

export function DesignersSection() {
  return (
    <Section id="designers" tone className={styles.designers}>
      <div>
        <SectionHeading
          title="Дизайнерам и архитекторам"
          description="Берём на себя техническую часть света. Концепция и авторство остаются за вами, а мы отвечаем за расчёт, оборудование и сроки."
        />
        <div className={styles.actions}>
          <Button href={partnershipHref}>Обсудить сотрудничество</Button>
        </div>
      </div>
      <dl className={styles.promises}>
        {promises.map((promise) => (
          <div key={promise.title}>
            <dt>{promise.title}</dt>
            <dd>{promise.description}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
