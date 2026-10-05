import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { Button } from '@/shared/ui/Button'
import { PhotoPlaceholder } from '@/shared/ui/PhotoPlaceholder'
import { buildMailto } from '@/shared/lib/mailto'
import styles from './Offer.module.css'

const exampleHref = buildMailto({
  subject: 'Пример проекта освещения',
  body: 'Здравствуйте! Пришлите, пожалуйста, пример проекта освещения.',
})

export function ProjectExampleSection() {
  return (
    <Section className={styles.offer}>
      <PhotoPlaceholder
        label="Разворот готового проекта"
        ariaLabel="Пример проекта освещения"
        className={styles.photo}
      />
      <div>
        <SectionHeading
          title="Посмотрите, как выглядит готовый проект"
          description="Пришлём пример: планы расстановки, расчёт освещённости и спецификацию оборудования. Так вы заранее поймёте, что получите."
        />
        <div className={styles.actions}>
          <Button href={exampleHref}>Получить пример проекта</Button>
        </div>
      </div>
    </Section>
  )
}
