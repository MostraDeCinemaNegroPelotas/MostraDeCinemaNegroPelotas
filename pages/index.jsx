import Aside from 'components/Aside'
import Menu from 'components/Menu'
import Logo from 'components/Logo'
import UiWrapper from 'components/UiWrapper'

const pageHome = () => {
  return (
    <UiWrapper
      background="/bg-blue-flower.png"
      className="home-page"
    >
      <Menu />
      <Logo />
      <Aside />

      <img className="apoio" src="/apoio.png" alt=""/>
    </UiWrapper>
  )
}

export default pageHome
