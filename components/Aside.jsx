import Waves from './Waves'
import Particles from './Particles'
import SocialLinks from './SocialLinks'

const Aside = React.memo(() => {
  return (
    <aside className="aside has-pointer" id="particles-js">
      <Particles/>
      <Waves />
      <img src="/simple-logo.png" className="aside-logo"/>
      <img src="/aside-text.png" className="aside-text"/>
      <SocialLinks />
    </aside>
  )
})

export default Aside
