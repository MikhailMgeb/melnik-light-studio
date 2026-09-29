import { Container } from '@/shared/ui/Container'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import styles from './DesignersSection.module.css'

interface DesignerPromise {
  title: string
  description: string
}

const promises: DesignerPromise[] = [
  {
    title: 'Не конкурируем за дизайн',
    description: 'Не предлагаем заказчику свой визуал в обход вас. Все решения по образу остаются за дизайнером.',
  },
  {
    title: 'Документы под вашим именем',
    description: 'Расчёт, схемы и спецификацию можем оформить в вашей подаче, чтобы проект выглядел единым.',
  },
  {
    title: 'Выезд и мокап на объекте',
    description:
      'Привозим светильники и показываем свет в реальном пространстве, чтобы заказчик принимал решение не по рендеру.',
  },
]

export function DesignersSection() {
  return (
    <section id="designers">
      <Container>
        <SectionHeading
          title="Если вы делаете интерьер — мы делаем свет"
          description="Подключаемся к проекту как внешний отдел освещения. Работаем по вашим чертежам, в вашем графике и с вашей подачей."
        />
        <div className={styles.promises}>
          {promises.map((promise) => (
            <div key={promise.title}>
              <h3>{promise.title}</h3>
              <p>{promise.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.also}>
          <h3>Частным клиентам</h3>
          <p>
            Если в проекте нет раздела по освещению или дизайнера нет вовсе, сделаем светотехническую
            часть с нуля и доведём её до монтажа и настройки.
          </p>
        </div>
      </Container>
    </section>
  )
}
