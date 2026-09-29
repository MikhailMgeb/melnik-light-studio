import { PhotoPlaceholder } from '@/shared/ui/PhotoPlaceholder'
import type { Project } from './Project'
import styles from './ProjectCard.module.css'

export function ProjectCard({ title, meta, focusX, focusX2, size }: Project) {
  const classes = size === 'large' ? `${styles.work} ${styles.large}` : styles.work

  return (
    <article className={classes}>
      <PhotoPlaceholder label="Фото объекта" focusX={focusX} focusX2={focusX2} className={styles.photo} />
      <h3>{title}</h3>
      <p>{meta}</p>
    </article>
  )
}
