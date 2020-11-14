import Waves from './Waves'
import Particles from './Particles'
import SocialLinks from './SocialLinks'

const Aside = () => {
  return (
    <aside className="aside" id="particles-js">
      <Particles/>
      <Waves />
      <img src="/simple-logo.png" className="aside-logo"/>
      <img src="/aside-text.png" className="aside-text"/>
      <SocialLinks />
    </aside>
  )
}

export default Aside
