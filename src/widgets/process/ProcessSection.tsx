import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { processSteps, ProcessStepCard } from '@/entities/process-step'
import styles from './ProcessSection.module.css'

export function ProcessSection() {
  return (
    <section id="process">
      <Container>
        <SectionHeading
          title="Как проходит работа"
          description="На каждом этапе понятно, что происходит, сколько это займёт и что будет дальше."
        />
        <ol className={styles.steps}>
          {processSteps.map((step) => (
            <ProcessStepCard key={step.title} {...step} />
          ))}
        </ol>
        <p className={styles.total}>Сроки ориентировочные и зависят от площади и сложности объекта.</p>
      </Container>
    </section>
  )
}
