import { buildMailto } from '@/shared/lib/mailto'

export interface ProjectRequest {
  name: string
  contact: string
  objectType: string
  area: string
  role: string
  message: string
}

export function buildRequestMailto({ name, contact, objectType, area, role, message }: ProjectRequest) {
  const object = area ? `${objectType}, ${area} м²` : objectType
  const body = `Имя: ${name}\nКонтакт: ${contact}\nОбъект: ${object}\nКто: ${role}\n\n${message}`

  return buildMailto({ subject: 'Заявка на расчёт проекта освещения', body })
}
