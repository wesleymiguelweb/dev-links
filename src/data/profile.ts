import avatarDark from '../assets/avatar.png'
import avatarLight from '../assets/avatar-light.png'

export type ThemeMode = 'light' | 'dark'

export type SocialNetwork = 'github' | 'instagram' | 'youtube' | 'linkedin'

export interface ProfileLink {
  id: string
  label: string
  url: string
}

export interface SocialLink {
  id: SocialNetwork
  label: string
  url: string
}

export interface Profile {
  name: string
  avatarByTheme: Record<ThemeMode, string>
  links: ProfileLink[]
  socialLinks: SocialLink[]
  footer: string
}

/**
 * O domínio example.com é reservado para exemplos.
 * Troque cada URL abaixo pelos destinos reais antes de publicar o projeto.
 */
const provisionalUrl = (path: string) => `https://example.com/${path}`

export const profile = {
  name: '@wesleymiguelweb',
  avatarByTheme: {
    light: avatarLight,
    dark: avatarDark,
  },
  links: [
    { id: 'course-signup', label: 'Inscreva-se no Curso', url: provisionalUrl('inscreva-se-no-curso') },
    { id: 'ebook', label: 'Baixe meu e-book', url: provisionalUrl('e-book') },
    { id: 'portfolio', label: 'Veja meu portfólio no GitHub', url: 'https://github.com/wesleymiguelweb/' },
    { id: 'course', label: 'Conheça meu curso', url: provisionalUrl('curso') },
  ],
  socialLinks: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/wesleymiguelweb' },
    { id: 'instagram', label: 'Instagram', url: provisionalUrl('instagram') },
    { id: 'youtube', label: 'YouTube', url: provisionalUrl('youtube') },
    { id: 'linkedin', label: 'LinkedIn', url: provisionalUrl('linkedin') },
  ],
  footer: 'Feito pelo dev Wesley, conheça meu portfólio',
} satisfies Profile
