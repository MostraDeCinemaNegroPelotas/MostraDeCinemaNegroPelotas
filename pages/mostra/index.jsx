import Menu from 'components/Menu'
import UiWrapper from 'components/UiWrapper'
import Link from 'next/link'

const pageMostra = () => {
  return (
    <UiWrapper className="mostra-page">
      <Menu />
      <section className="mostra-header">
        <Link href="/">
          <img className="has-pointer logo" src="/logo-mostra.png" alt=""/>
        </Link>
        <img className="titulo" src="/titulo-mostra.png" alt=""/>
        <img className="texto" src="/texto-mostra.png" alt="" srcset=""/>
      </section>
    </UiWrapper>
  )
}

export default pageMostra
