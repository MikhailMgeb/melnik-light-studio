import { Container } from '@/shared/ui/Container'
import { Button } from '@/shared/ui/Button'
import { PhotoPlaceholder } from '@/shared/ui/PhotoPlaceholder'
import { primaryCtaHref } from '@/shared/config/navigation'
import { usePointerLight } from './lib/usePointerLight'
import styles from './Hero.module.css'

interface Fact {
  title: string
  description: string
}

const facts: Fact[] = [
  { title: 'Проект + поставка', description: 'одна ответственность за результат' },
  { title: 'Для дизайнеров и частных клиентов', description: 'работаем с бюро и напрямую' },
  { title: 'Москва', description: 'встречи в студии и онлайн' },
]

export function Hero() {
  const { heroRef, ringRef } = usePointerLight()

  return (
    <section ref={heroRef} className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h1>Проект освещения для квартиры и дома — с расчётом и поставкой</h1>
            <p className={styles.sub}>
              Продумаем свет под ваш интерьер, проверим его расчётом, подберём и привезём светильники. Одна
              команда от первой встречи до монтажа.
            </p>
            <div className={styles.actions}>
              <Button href={primaryCtaHref}>Рассчитать стоимость проекта</Button>
              <Button href="#projects" variant="ghost">
                Посмотреть проекты
              </Button>
            </div>
          </div>
          <figure className={styles.founder}>
            <div ref={ringRef} className={styles.ring} aria-hidden="true" />
            <PhotoPlaceholder label="Фото основателя" ariaLabel="Илья Мельник" className={styles.photo} />
            <figcaption className={styles.cap}>
              <b>Илья Мельник</b>
              <span>основатель MELNIK°</span>
            </figcaption>
          </figure>
        </div>
        <div className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.title}>
              <b>{fact.title}</b>
              {fact.description}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
