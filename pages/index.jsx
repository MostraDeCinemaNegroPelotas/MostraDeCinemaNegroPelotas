import Aside from 'components/Aside'
import Menu from 'components/Menu'
import Logo from 'components/Logo'
import UiWrapper from 'components/UiWrapper'

const Home = () => {
  return (
    <UiWrapper
      background="/bg-blue-flower.png"
      className="home-page"
    >
      <Menu />
      <Logo />
      <Aside />
    </UiWrapper>
  )
}

export default Home
