import { useState, useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

/* Тот же ключ читает инлайн-скрипт в index.html, чтобы тема применилась до первого рендера. */
const STORAGE_KEY = 'melnik-theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

function subscribeToSystemTheme(onChange: () => void) {
  const query = window.matchMedia(DARK_QUERY)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

function isSystemDark() {
  return window.matchMedia(DARK_QUERY).matches
}

export function useTheme() {
  const [chosen, setChosen] = useState<Theme | null>(readStoredTheme)
  const systemDark = useSyncExternalStore(subscribeToSystemTheme, isSystemDark)
  const theme: Theme = chosen ?? (systemDark ? 'dark' : 'light')

  const setTheme = (next: Theme) => {
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // хранилище недоступно (приватный режим) — тема живёт до перезагрузки
    }
    setChosen(next)
  }

  return { theme, setTheme }
}
