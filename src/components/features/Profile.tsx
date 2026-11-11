import { profile } from '../../data/profile'
import { useTheme } from '../../hooks/useTheme'
import { ThemeToggle } from '../ui/ThemeToggle'
import { LinkButton } from './LinkButton'
import { ProfileAvatar } from './ProfileAvatar'
import { SocialLinks } from './SocialLinks'

export function Profile() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section aria-labelledby="profile-name" className="profile">
      <header className="profile__header">
        <ProfileAvatar
          profileName={profile.name}
          sources={profile.avatarByTheme}
          theme={theme}
        />
        <h1 className="profile__name" id="profile-name">
          {profile.name}
        </h1>
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </header>

      <nav aria-label="Links principais" className="profile__links">
        {profile.links.map((link) => (
          <LinkButton key={link.id} link={link} />
        ))}
      </nav>

      <SocialLinks links={profile.socialLinks} />

      <footer className="profile__footer">{profile.footer}</footer>
    </section>
  )
}
