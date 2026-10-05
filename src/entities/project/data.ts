import type { ProjectCategory } from './ProjectCategory'

export const projectCategories: ProjectCategory[] = [
  {
    id: 'flat',
    label: 'Квартиры',
    photos: ['Квартира — главное фото', 'Кухня-гостиная', 'Спальня', 'Ванная', 'Прихожая', 'Детали'],
  },
  {
    id: 'house',
    label: 'Частные дома',
    photos: ['Дом — главное фото', 'Гостиная', 'Лестница', 'Фасад', 'Терраса', 'Детали'],
  },
  {
    id: 'public',
    label: 'Общественные',
    photos: ['Объект — главное фото', 'Зал', 'Витрина', 'Ресепшен', 'Коридор', 'Детали'],
  },
]
