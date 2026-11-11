import { logoGithub, logoInstagram, logoLinkedin, logoYoutube } from 'ionicons/icons'
import type { CSSProperties } from 'react'
import type { SocialLink, SocialNetwork } from '../../data/profile'

interface SocialLinksProps {
  links: SocialLink[]
}

const socialIcons: Record<SocialNetwork, string> = {
  github: logoGithub,
  instagram: logoInstagram,
  youtube: logoYoutube,
  linkedin: logoLinkedin,
}

function getIconStyle(icon: string): CSSProperties {
  return {
    WebkitMaskImage: `url("${icon}")`,
    maskImage: `url("${icon}")`,
  }
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <nav aria-label="Redes sociais" className="social-links">
      {links.map((link) => {
        const icon = (
          <span
            aria-hidden="true"
            className="social-link__icon"
            style={getIconStyle(socialIcons[link.id])}
          />
        )

        if (!link.url) {
          return (
            <span
              aria-disabled="true"
              aria-label={`${link.label} (destino não configurado)`}
              className="social-link social-link--disabled"
              key={link.id}
              role="img"
            >
              {icon}
            </span>
          )
        }

        return (
          <a
            aria-label={link.label}
            className="social-link"
            href={link.url}
            key={link.id}
            rel="noopener noreferrer"
            target="_blank"
            title={link.label}
          >
            {icon}
          </a>
        )
      })}
    </nav>
  )
}
