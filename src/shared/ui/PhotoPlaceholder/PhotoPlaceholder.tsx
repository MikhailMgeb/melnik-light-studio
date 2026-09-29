import type { CSSProperties } from 'react'
import styles from './PhotoPlaceholder.module.css'

interface PhotoPlaceholderStyle extends CSSProperties {
  '--x'?: string
  '--y'?: string
  '--x2'?: string
}

interface PhotoPlaceholderProps {
  label: string
  focusX?: string
  focusY?: string
  focusX2?: string
  className?: string
}

export function PhotoPlaceholder({
  label,
  focusX = '50%',
  focusY = '0%',
  focusX2 = '20%',
  className,
}: PhotoPlaceholderProps) {
  const style: PhotoPlaceholderStyle = {
    '--x': focusX,
    '--y': focusY,
    '--x2': focusX2,
  }

  const classes = className ? `${styles.ph} ${className}` : styles.ph

  return (
    <div className={classes} style={style}>
      <span>{label}</span>
    </div>
  )
}
