import type { ElementType, ReactNode } from 'react'
import styles from './Container.module.css'

interface ContainerProps {
  as?: ElementType
  className?: string
  id?: string
  children: ReactNode
}

export function Container({ as: Tag = 'div', className, id, children }: ContainerProps) {
  const classes = className ? `${styles.wrap} ${className}` : styles.wrap
  return (
    <Tag className={classes} id={id}>
      {children}
    </Tag>
  )
}
