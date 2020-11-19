import Menu from 'components/Menu'
import UiWrapper from 'components/UiWrapper'

const pageMostra = () => {
  return (
    <UiWrapper className="mostra-page">
      <Menu />
      <section className="mostra-header">
        <img className="logo" src="/logo-mostra.png" alt=""/>
        <img className="titulo" src="/titulo-mostra.png" alt=""/>
        <img className="texto" src="/texto-mostra.png" alt="" srcset=""/>
      </section>
    </UiWrapper>
  )
}

export default pageMostra
