import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { processSteps, ProcessStepCard } from '@/entities/process-step'
import styles from './ProcessSection.module.css'

export function ProcessSection() {
  return (
    <Section id="steps" tone>
      <SectionHeading title="Три шага до готового освещения" />
      <ol className={styles.steps}>
        {processSteps.map((step) => (
          <ProcessStepCard key={step.title} {...step} />
        ))}
      </ol>
    </Section>
  )
}
