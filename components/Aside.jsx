import Text from './Text'
import Waves from './Waves'
import Particles from './particles/Particles'

export default function Aside () {
  const asideDescription = (
    <>
      <p> A Mostra de Cinema Negro de Pelotas chega </p>
      <p> a sua 4ª edição </p>
      <p> e acontecerá de forma online pela primeira vez. </p>
      <br/>
      <p>
        O catálogo é composto por curtas-metragens
        brasileiros realizados e protagonizados por
        pessoas negras que serão disponibilizados
        do dia 19 a 29 de Novembro de 2020.
      </p>
    </>
  )

  return (
    <aside className="aside" id="particles-js">
      <Particles/>
      <Text text={asideDescription} tag="h1" styleModifier="aside__text" />
      <Waves />
    </aside>
  )
}
