import type { ProcessStep } from './ProcessStep'
import styles from './ProcessStepCard.module.css'

export function ProcessStepCard({ title, description }: ProcessStep) {
  return (
    <li className={styles.step}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
