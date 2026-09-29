import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { PhotoPlaceholder } from '@/shared/ui/PhotoPlaceholder'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <Container className={styles.hero}>
      <div className={styles.top}>
        <h1>Проектируем свет и тень для интерьеров — от расчёта до настройки на объекте</h1>
        <div>
          <p className="lead">
            MELNIK° — московская студия светодизайна. Работаем в паре с дизайнерами и архитекторами:
            считаем, подбираем, поставляем и настраиваем свет так, чтобы интерьер выглядел как в
            проекте.
          </p>
          <div className={styles.actions}>
            <Button href="#contact">Обсудить проект</Button>
            <Button href="#works" variant="ghost">
              Смотреть проекты
            </Button>
          </div>
        </div>
      </div>
      <PhotoPlaceholder
        label="Фото объекта, горизонтальное, от 2400 px по ширине"
        focusX="62%"
        focusX2="18%"
        className={styles.photo}
      />
      <div className={styles.caption}>
        <span>Название объекта</span>
        <span>Тип помещения, площадь</span>
      </div>
    </Container>
  )
}
