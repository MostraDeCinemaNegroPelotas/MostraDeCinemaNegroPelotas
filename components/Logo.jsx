import Particles from './Particles'
import LogoSpinners from './LogoSpinners'

const Logo =  React.memo(() => {
    return (
      <div className="logo-container" id="particles-js">
        <Particles/>
        <div className="logo-img"></div>
        <LogoSpinners />
      </div>
    )
  }
)

export default Logo
