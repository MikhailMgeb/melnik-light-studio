export function kelvinToRgb(kelvin: number): [number, number, number] {
  const t = kelvin / 100
  const clamp = (value: number) => Math.round(Math.max(0, Math.min(255, value)))

  const r = t <= 66 ? 255 : 329.698727446 * Math.pow(t - 60, -0.1332047592)
  const g =
    t <= 66
      ? 99.4708025861 * Math.log(t) - 161.1195681661
      : 288.1221695283 * Math.pow(t - 60, -0.0755148492)
  const b = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307

  return [clamp(r), clamp(g), clamp(b)]
}

export function moodDescription(kelvin: number): string {
  if (kelvin <= 2800) return 'Очень тёплый свет — вечерние сценарии, спальня'
  if (kelvin <= 3200) return 'Тёплый свет — гостиная, столовая, жилые зоны'
  if (kelvin <= 3700) return 'Нейтрально-тёплый — кухня, ванная, коридор'
  return 'Нейтральный — рабочие зоны, гардеробная, кабинет'
}
