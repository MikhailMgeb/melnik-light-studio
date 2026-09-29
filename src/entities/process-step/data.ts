import type { ProcessStep } from './ProcessStep'

export const processSteps: ProcessStep[] = [
  { duration: '1–2 дня', title: 'Бриф и чертежи', description: 'Планы, развёртки, референсы и сценарии жизни.' },
  {
    duration: '2–3 дня',
    title: 'Мокап на объекте',
    description: 'Показываем варианты света в реальном пространстве.',
  },
  {
    duration: '1–2 недели',
    title: 'Концепция и расчёт',
    description: 'Схема освещения, подтверждённая расчётом.',
  },
  {
    duration: '3–5 дней',
    title: 'Спецификация и КП',
    description: 'Оборудование, сроки и стоимость в одном документе.',
  },
  {
    duration: '2–4 недели',
    title: 'Поставка',
    description: 'Комплектуем и доставляем, держим в курсе сроков.',
  },
  { duration: '1–2 дня', title: 'Юстировка', description: 'Настраиваем углы и сцены после монтажа.' },
]
