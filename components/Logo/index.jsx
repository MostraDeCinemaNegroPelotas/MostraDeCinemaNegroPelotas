import Particles from '../Particles'
import LogoSpinners from './LogoSpinners'
// import LogoSponsors from './LogoSponsors'

const Logo = () => {
  return (
    <div className="logo-container" id="particles-js">
      <Particles/>
      <div className="logo-img"></div>
      <LogoSpinners />
      {/* <LogoSponsors /> */}
    </div>
  )
}

export default Logo
