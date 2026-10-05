import type { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  href?: string
  type?: 'button' | 'submit'
  variant?: 'solid' | 'ghost'
  className?: string
  children: ReactNode
}

export function Button({ href, type = 'button', variant = 'solid', className, children }: ButtonProps) {
  const classes = [styles.btn, variant === 'ghost' ? styles.ghost : styles.solid, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  )
}
