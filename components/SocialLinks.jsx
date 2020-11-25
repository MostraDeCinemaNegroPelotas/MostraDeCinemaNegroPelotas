import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brands from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
  const links = [
    {
      icon: 'faInstagram',
      href: 'https://www.instagram.com/mostra.cinema.negro.pelotas/?hl=pt-br'
    },
    {
      icon: 'faYoutube',
      href: 'https://www.youtube.com/channel/UCGFyOV4bIhNXFxSQd7PbNNw'
    },
    {
      icon: 'faFacebookF',
      href: 'https://www.facebook.com/mostradecinemanegrodepelotas/?epa=SEARCH_BOX'
    }
  ]

  return (
    <ul className="social-links">
      {links.map((link, index) => (
        <li className="social-links-item" key={index} onClick={() => window.open(link.href,'_blank')}>
          <FontAwesomeIcon icon={Brands[link.icon]} />
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks
