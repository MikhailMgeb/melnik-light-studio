import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import styles from './ReviewsSection.module.css'

interface Review {
  text: string
  author: string
  context: string
}

/* Заглушки: заменить на реальные отзывы с Яндекс Карт или 2ГИС. */
const reviews: Review[] = [
  {
    text: 'Текст отзыва клиента. Замените на реальный отзыв с Яндекс Карт или 2ГИС.',
    author: 'Имя клиента',
    context: 'Квартира, Москва',
  },
  {
    text: 'Текст отзыва клиента. Замените на реальный отзыв с Яндекс Карт или 2ГИС.',
    author: 'Имя клиента',
    context: 'Частный дом',
  },
  {
    text: 'Текст отзыва дизайнера, с которым вы работали над проектом.',
    author: 'Имя дизайнера',
    context: 'Дизайн-бюро',
  },
]

export function ReviewsSection() {
  return (
    <Section id="reviews">
      <SectionHeading title="Отзывы клиентов" />
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <blockquote key={review.context} className={styles.review}>
            <p>{review.text}</p>
            <footer>
              <b>{review.author}</b>
              {review.context}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}
