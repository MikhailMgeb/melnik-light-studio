import type { ReactNode } from 'react'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  title: ReactNode
  description: ReactNode
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className={styles.head}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
