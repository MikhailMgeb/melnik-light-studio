import type { ReactNode } from 'react'
import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  title: ReactNode
  description?: ReactNode
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <>
      <h2>{title}</h2>
      {description && <p className={styles.sub}>{description}</p>}
    </>
  )
}
