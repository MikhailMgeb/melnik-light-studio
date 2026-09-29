import type { CSSProperties } from 'react'
import { useWallReveal } from '../model/useWallReveal'
import styles from '../LightPreview.module.css'

interface LightWallProps {
  wallStyle: CSSProperties
}

export function LightWall({ wallStyle }: LightWallProps) {
  const { ref, revealed } = useWallReveal()
  const wallClasses = revealed ? `${styles.wall} ${styles.on}` : styles.wall

  return (
    <div
      ref={ref}
      className={wallClasses}
      style={wallStyle}
      role="img"
      aria-label="Стена галереи с тремя направленными светильниками, освещающими картину"
    >
      <div className={styles.beam} />
      <div className={styles.beam} />
      <div className={styles.beam} />
      <span className={styles.fixture} style={{ left: '18%' }} />
      <span className={styles.fixture} style={{ left: '50%' }} />
      <span className={styles.fixture} style={{ left: '82%' }} />
      <div className={styles.art}>
        <i />
      </div>
      <div className={styles.plinth} />
    </div>
  )
}
