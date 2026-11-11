import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_THEME, isThemeMode, THEME_STORAGE_KEY } from '../data/config'
import type { ThemeMode } from '../data/profile'

function getSavedTheme(): ThemeMode {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    return isThemeMode(savedTheme) ? savedTheme : DEFAULT_THEME
  } catch {
    // O navegador pode bloquear o acesso ao localStorage.
    return DEFAULT_THEME
  }
}

/**
 * Mantém o tema ativo como única fonte de verdade.
 * O atributo data-theme é aplicado no <html> e a preferência é persistida.
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getSavedTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // A interface continua funcionando sem persistência.
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
