import type { ReactNode } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
  className?: string
  children: ReactNode
}

export function Container({ className, children }: ContainerProps) {
  const classes = className ? `${styles.wrap} ${className}` : styles.wrap
  return <div className={classes}>{children}</div>
}
