import styles from './Wordmark.module.css'

interface WordmarkProps {
  href?: string
  ariaLabel?: string
  className?: string
}

export function Wordmark({ href, ariaLabel, className }: WordmarkProps) {
  const classes = className ? `${styles.mark} ${className}` : styles.mark
  const content = (
    <>
      MELNIK
      <span className={styles.deg} aria-hidden="true" />
    </>
  )

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }

  return <span className={classes}>{content}</span>
}
