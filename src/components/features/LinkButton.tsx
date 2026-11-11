import type { ProfileLink } from '../../data/profile'

interface LinkButtonProps {
  link: ProfileLink
}

export function LinkButton({ link }: LinkButtonProps) {
  if (!link.url) {
    return (
      <span aria-disabled="true" className="profile-link profile-link--disabled">
        {link.label}
      </span>
    )
  }

  return (
    <a
      className="profile-link"
      href={link.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {link.label}
    </a>
  )
}
