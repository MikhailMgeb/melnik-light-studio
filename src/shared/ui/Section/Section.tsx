import type { ReactNode } from 'react'
import { Container } from '@/shared/ui/Container'
import styles from './Section.module.css'

interface SectionProps {
  id?: string
  tone?: boolean
  className?: string
  children: ReactNode
}

export function Section({ id, tone = false, className, children }: SectionProps) {
  const classes = tone ? `${styles.block} ${styles.tone}` : styles.block

  return (
    <section id={id} className={classes}>
      <Container className={className}>{children}</Container>
    </section>
  )
}
