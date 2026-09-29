import type { ProcessStep } from './ProcessStep'
import styles from './ProcessStepCard.module.css'

export function ProcessStepCard({ duration, title, description }: ProcessStep) {
  return (
    <li className={styles.step}>
      <span className={styles.duration}>{duration}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
