import { SegmentedControl } from '@/shared/ui/SegmentedControl'
import { useTheme, type Theme } from '../model/useTheme'

const options: { value: Theme; label: string }[] = [
  { value: 'light', label: 'Свет' },
  { value: 'dark', label: 'Тень' },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return <SegmentedControl options={options} value={theme} onChange={setTheme} ariaLabel="Тема сайта" />
}
