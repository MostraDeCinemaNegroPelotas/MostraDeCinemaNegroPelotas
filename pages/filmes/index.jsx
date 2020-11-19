import { useSelector, useDispatch} from 'react-redux'
import { getCatalogoByPrograma, getAllProgramaNumbers } from 'Redux/catalogos'
import { getPlayerData } from 'Redux/player'
import UiWrapper from 'components/UiWrapper'
import Slide from 'components/Slide'
import ModalVideo from 'react-modal-video'
import { triggerPlayer} from 'Redux/player'
import Menu from 'components/Menu'

const pageFilmes = () => {
  const getCatalogoByProgramaFn = useSelector(getCatalogoByPrograma);
  const getAllProgramaNumbersFn = useSelector(getAllProgramaNumbers);
  const playerData = useSelector(getPlayerData);
  const dispatch = useDispatch()

  return (
    <UiWrapper className="filmes-page" id="particles-js">
      <Menu />
      
      <section className="filmes-header">
        <img className="logo" src="/simple-logo.png" alt=""/>
        <img className="catalogo" src="/catalogo-titulo.png" alt=""/>
        <img className="texto" src="/filmes-texto.png" alt="" srcset=""/>
      </section>

      {(
        [...getAllProgramaNumbersFn].map(
          (programaNumber, index) => (
            <section className="filmes-list" key={index}>
              <div className="filmes-list-programa-wrapper">
                <img className="filmes-list-programa" src={`/programas/${programaNumber}.png`} alt=""/>
              </div>
              <Slide filmes={getCatalogoByProgramaFn(programaNumber)}/>
            </section>
          )
        )
      )}
      
      <ModalVideo 
        channel='youtube' 
        autoplay 
        isOpen={playerData.open} 
        videoId={playerData.movieUrl} 
        onClose={() => dispatch((triggerPlayer()))} 
      />
    </UiWrapper>
  )
}

export default pageFilmes
