import { useSelector, useDispatch} from 'react-redux'
import { getCatalogoByPrograma, getAllProgramaNumbers } from 'Redux/catalogos'
import { getPlayerData } from 'Redux/player'
import UiWrapper from 'components/UiWrapper'
import Link from 'next/link'
import Slide from 'components/Slide'
import ModalVideo from 'react-modal-video'
import { triggerPlayer} from 'Redux/player'

const renderCurrentYear = () => new Date().getFullYear(); 

const pageFilmes = () => {
  const getCatalogoByProgramaFn = useSelector(getCatalogoByPrograma);
  const getAllProgramaNumbersFn = useSelector(getAllProgramaNumbers);
  const playerData = useSelector(getPlayerData);
  const dispatch = useDispatch()

  return (
    <UiWrapper className="filmes-page" id="particles-js">
      <section className="filmes-header">
        <h2>Catalogo {renderCurrentYear()}</h2>
        <Link href="/">
          <img src="/logo-waves.png"  />
        </Link>
      </section>
      {(
        [...getAllProgramaNumbersFn].map(
          (programaNumber, index) => (
            <section className="filmes-list" key={index}>
              <h1>
                PROGRAMA {programaNumber}
              </h1>
              <Slide filmes={getCatalogoByProgramaFn(programaNumber)}/>
            </section>
          )
        )
      )}
      <ModalVideo channel='youtube' autoplay isOpen={playerData.open} videoId={playerData.movieUrl} onClose={() => dispatch((triggerPlayer()))} />
    </UiWrapper>
  )
}

export default pageFilmes
