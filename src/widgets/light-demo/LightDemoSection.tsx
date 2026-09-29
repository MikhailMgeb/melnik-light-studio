import { Container } from '@/shared/ui/Container'
import { LightPreview } from '@/features/light-preview'
import styles from './LightDemoSection.module.css'

export function LightDemoSection() {
  return (
    <section id="try">
      <Container className={styles.demo}>
        <div className={styles.text}>
          <h2>Один и тот же светильник — разные интерьеры</h2>
          <p>
            Цветовая температура и угол луча меняют пространство сильнее, чем кажется по каталогу.
            Попробуйте сами, а на объекте мы подберём это точно — расчётом и мокапом.
          </p>
        </div>
        <LightPreview />
      </Container>
    </section>
  )
}
