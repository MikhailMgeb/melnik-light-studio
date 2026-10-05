import styles from './PhotoPlaceholder.module.css'

interface PhotoPlaceholderProps {
  label: string
  ariaLabel?: string
  className?: string
}

/* Заглушка под фото: при появлении реальных снимков заменить на <img>. */
export function PhotoPlaceholder({ label, ariaLabel, className }: PhotoPlaceholderProps) {
  const classes = className ? `${styles.photo} ${className}` : styles.photo

  return <div className={classes} data-label={label} role={ariaLabel ? 'img' : undefined} aria-label={ariaLabel} />
}
