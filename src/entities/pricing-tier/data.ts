import type { PricingTier } from './PricingTier'

export const pricingTiers: PricingTier[] = [
  {
    title: 'Светотехнический расчёт',
    note: '',
    pricePrefix: 'от ',
    priceValue: 'сумма',
    priceHasFill: true,
    priceSuffix: ' ₽ за м²',
    features: ['Расчёт освещённости', 'Схема расстановки', 'Одна корректировка'],
    ctaLabel: 'Обсудить расчёт',
    variant: 'default',
  },
  {
    title: 'Концепция и проект',
    note: 'Чаще всего выбирают дизайнеры',
    pricePrefix: 'от ',
    priceValue: 'сумма',
    priceHasFill: true,
    priceSuffix: ' ₽',
    features: [
      'Концепция и сценарии',
      'Светотехнический расчёт',
      'Чертежи расстановки и групп',
      'Спецификация оборудования',
    ],
    ctaLabel: 'Обсудить проект',
    variant: 'main',
  },
  {
    title: 'Под ключ',
    note: '',
    priceValue: 'Индивидуально',
    priceHasFill: false,
    features: ['Концепция и расчёт', 'Поставка оборудования', 'Сопровождение монтажа', 'Юстировка и сценарии'],
    ctaLabel: 'Обсудить под ключ',
    variant: 'default',
  },
]
