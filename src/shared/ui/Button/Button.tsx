import type { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  href: string
  variant?: 'solid' | 'ghost'
  className?: string
  children: ReactNode
}

export function Button({ href, variant = 'solid', className, children }: ButtonProps) {
  const classes = [styles.btn, variant === 'ghost' ? styles.ghost : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  )
}
