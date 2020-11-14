import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brands from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
  const router = useRouter()

  const links = [
    {
      icon: 'faInstagram',
      href: 'www.google.com'
    },
    {
      icon: 'faYoutube',
      href: 'www.youtube.com'
    },
    {
      icon: 'faFacebookF',
      href: 'www.google.com'
    }
  ]

  return (
    <ul className="social-links">
      {links.map((link, index) => (
        <li className="social-links-item" key={index} onClick={() => router.replace(link.href)}>
          <FontAwesomeIcon icon={Brands[link.icon]} />
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
