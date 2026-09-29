import { Container } from '@/shared/ui/Container'
import { PhotoPlaceholder } from '@/shared/ui/PhotoPlaceholder'
import styles from './FounderSection.module.css'

export function FounderSection() {
  return (
    <section id="about">
      <Container className={styles.founder}>
        <PhotoPlaceholder
          label="Портрет, вертикальный"
          focusX="70%"
          focusX2="10%"
          className={styles.photo}
        />
        <div>
          <h2>Илья Мельник</h2>
          <p className={styles.role}>Основатель студии, светодизайнер</p>
          <p>
            Занимаюсь светом как инженерной задачей: фотометрические расчёты, подбор и поставка
            оборудования, электрофурнитура и настройка на объекте.
          </p>
          <p className={styles.muted}>
            Для меня хороший свет начинается с тени: с того, что остаётся в полумраке, так же важно,
            как с того, что освещено. Поэтому MELNIK° работает как технический партнёр дизайнера, а не
            как поставщик светильников.
          </p>
          <p className={styles.muted}>Читаю лекции о свете для дизайнеров и архитекторов.</p>
        </div>
      </Container>
    </section>
  )
}
