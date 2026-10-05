import { useState, type FormEvent } from 'react'
import { Button } from '@/shared/ui/Button'
import { buildRequestMailto } from '../lib/buildRequestMailto'
import styles from './RequestForm.module.css'

const objectTypes = ['Квартира', 'Частный дом', 'Общественное пространство', 'Другое']
const roles = ['Владелец объекта', 'Дизайнер или архитектор', 'Бюро или студия']

export function RequestForm() {
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const field = (name: string) => String(data.get(name) ?? '').trim()

    const name = field('name')
    const contact = field('phone')

    if (!name || !contact) {
      setError('Укажите имя и телефон или мессенджер — так мы сможем ответить.')
      form.querySelector<HTMLInputElement>(`[name="${name ? 'phone' : 'name'}"]`)?.focus()
      return
    }

    setError('')
    window.location.assign(
      buildRequestMailto({
        name,
        contact,
        objectType: field('type'),
        area: field('area'),
        role: field('role'),
        message: field('msg'),
      }),
    )
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      <label className={styles.field}>
        Имя
        <input name="name" autoComplete="name" required />
      </label>
      <label className={styles.field}>
        Телефон или мессенджер
        <input name="phone" autoComplete="tel" required />
      </label>
      <label className={styles.field}>
        Тип объекта
        <select name="type">
          {objectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        Площадь, м²
        <input name="area" inputMode="numeric" />
      </label>
      <label className={`${styles.field} ${styles.wide}`}>
        Кто вы
        <select name="role">
          {roles.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>
      </label>
      <label className={`${styles.field} ${styles.wide}`}>
        Комментарий
        <textarea name="msg" placeholder="Стадия ремонта, сроки, что уже есть: дизайн-проект, выводы, смета" />
      </label>
      <p className={styles.error} role="alert">
        {error}
      </p>
      <Button type="submit" className={styles.submit}>
        Отправить заявку
      </Button>
      <p className={styles.note}>Откроется ваша почта с готовым письмом — останется нажать «Отправить».</p>
    </form>
  )
}
