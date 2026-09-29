import type { Service } from './Service'
import styles from './ServiceRow.module.css'

export function ServiceRow({ title, description }: Service) {
  return (
    <li className={styles.row}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}
