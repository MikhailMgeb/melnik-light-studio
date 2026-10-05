import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import styles from './ReasonsSection.module.css'

interface Reason {
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    title: 'Свет не слепит',
    description:
      'Светильники стоят там, где освещают поверхность, а не глаза. Вечером в комнате спокойно, а не как в офисе.',
  },
  {
    title: 'Управление без путаницы',
    description:
      'Продуманные сценарии и группы: у входа — нужные выключатели, а не ряд клавиш, назначение которых никто не помнит.',
  },
  {
    title: 'Интерьер выглядит дороже',
    description:
      'Акценты на фактурах, мебели и искусстве делают пространство глубже. Материалы, выбранные дизайнером, раскрываются полностью.',
  },
]

export function ReasonsSection() {
  return (
    <Section tone>
      <SectionHeading
        title="Зачем нужен проект освещения"
        description="Свет чаще всего проектируют в последнюю очередь — и именно его потом сложнее всего исправить."
      />
      <div className={styles.reasons}>
        {reasons.map((reason) => (
          <div key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
