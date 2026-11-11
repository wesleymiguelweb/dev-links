import type { ThemeMode } from '../../data/profile'

interface ProfileAvatarProps {
  theme: ThemeMode
  sources: Record<ThemeMode, string>
  profileName: string
}

export function ProfileAvatar({ theme, sources, profileName }: ProfileAvatarProps) {
  return (
    <div className="profile__avatar">
      <img
        alt={`Avatar de ${profileName}`}
        height={112}
        src={sources[theme]}
        width={112}
      />
    </div>
  )
}
