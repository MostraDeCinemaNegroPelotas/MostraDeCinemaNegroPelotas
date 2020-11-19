import { useSelector, useDispatch} from 'react-redux'
import { getLives } from 'Redux/lives'
import UiWrapper from 'components/UiWrapper'
import Lives from 'components/Lives'
import { getPlayerData } from 'Redux/player'
import ModalVideo from 'react-modal-video'
import { triggerPlayer} from 'Redux/player'
import Menu from 'components/Menu'

const pageFilmes = () => {
  const lives = useSelector(getLives);
  const dispatch = useDispatch()
  const playerData = useSelector(getPlayerData);

  return (
    <UiWrapper className="lives-page" id="particles-js">
      <Menu />
      
      <section className="lives-header">
        <img className="logo" src="/logo-mostra.png" alt=""/>
        <img className="titulo" src="/titulo-live.png" alt=""/>
        <img className="texto" src="/texto-live.png" alt="" srcset=""/>
      </section>

      <section className="lives-list">
        <Lives lives={lives}/>
      </section>
      
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
