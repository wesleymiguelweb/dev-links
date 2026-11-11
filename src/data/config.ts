import type { ThemeMode } from './profile'

export const THEME_STORAGE_KEY = 'devlinks-theme'
export const DEFAULT_THEME: ThemeMode = 'light'

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark'
}
