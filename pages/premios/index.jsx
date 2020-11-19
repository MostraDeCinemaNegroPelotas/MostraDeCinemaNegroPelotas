import Menu from 'components/Menu'
import UiWrapper from 'components/UiWrapper'

const pageMostra = () => {
  return (
    <UiWrapper className="premiacao-page">
      <Menu />
      <section className="premiacao-header">
        <img className="logo" src="/premiacao-logo-ctav.png" alt=""/>
        <img className="titulo" src="/premiacao-titulo-ctav.png" alt=""/>
        <img className="texto" src="/premiacao-texto.png" alt="" srcset=""/>
      </section>
    </UiWrapper>
  )
}

export default pageMostra
