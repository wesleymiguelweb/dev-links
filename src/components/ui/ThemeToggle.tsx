import { Moon, Sun } from '@phosphor-icons/react'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const actionLabel = `Ativar tema ${isDark ? 'claro' : 'escuro'}`

  return (
    <button
      aria-label={actionLabel}
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={onToggle}
      title={actionLabel}
      type="button"
    >
      <span aria-hidden="true" className="theme-toggle__icon theme-toggle__icon--sun">
        <Sun size={14} weight="fill" />
      </span>
      <span aria-hidden="true" className="theme-toggle__icon theme-toggle__icon--moon">
        <Moon size={14} weight="fill" />
      </span>
      <span
        aria-hidden="true"
        className={`theme-toggle__thumb${isDark ? ' theme-toggle__thumb--dark' : ''}`}
      >
        {isDark ? <Moon size={16} weight="fill" /> : <Sun size={16} weight="fill" />}
      </span>
    </button>
  )
}
