import Aside from 'components/Aside'
import Menu from 'components/Menu'
import Logo from 'components/Logo'
import Wrapper from 'components/Wrapper'

const Home = () => {
  return (
    <Wrapper
      background="/bg-blue-flower.png"
      className="home-page"
    >
      <Menu />
      <Logo />
      <Aside />
    </Wrapper>
  )
}

export default Home
