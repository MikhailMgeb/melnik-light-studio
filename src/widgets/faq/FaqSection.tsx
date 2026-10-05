import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import styles from './FaqSection.module.css'

interface FaqItem {
  question: string
  answer: string
}

const items: FaqItem[] = [
  {
    question: 'С какими производителями вы работаете?',
    answer:
      'С проверенными европейскими и российскими брендами, у которых стабильные световые характеристики. Выбираем оборудование под задачу проекта, а не под конкретного поставщика.',
  },
  {
    question: 'Зачем нужен светотехнический расчёт?',
    answer:
      'Расчёт показывает, сколько света будет на каждой поверхности ещё до покупки светильников. Так в комнате не окажется темно или слишком ярко, и вы не переплатите за лишнее оборудование.',
  },
  {
    question: 'Выводы под свет уже сделаны. Можно сделать проект по ним?',
    answer:
      'Да. Подберём решение под существующие выводы и отметим места, где небольшой перенос заметно улучшит результат.',
  },
  {
    question: 'Обязательно ли покупать оборудование у вас?',
    answer:
      'Нет, проект остаётся вашим. Но при поставке через нас мы отвечаем за соответствие светильников проекту и помогаем на этапе монтажа.',
  },
  {
    question: 'Что делать, если смета выходит за бюджет?',
    answer: 'Предложим аналоги и расставим приоритеты: где экономия незаметна, а где светильник лучше оставить.',
  },
]

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeading title="Частые вопросы" />
      <div className={styles.faq}>
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
