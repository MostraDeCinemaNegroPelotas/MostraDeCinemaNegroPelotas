import Menu from 'components/Menu'
import Link from 'next/link'
import UiWrapper from 'components/UiWrapper'
import ModalVideo from 'react-modal-video'
import { useSelector, useDispatch} from 'react-redux'
import { triggerPlayer} from 'Redux/player'
import { getPlayerData } from 'Redux/player'
import Lives from 'components/Lives';

const pageMostra = () => {
  
  const playerData = useSelector(getPlayerData);
  const dispatch = useDispatch()

  const lives = [
    {
      nome: 'CTAV',
      feat: '',
      data: '',
      link: 'https://youtu.be/YVPh32xF0UI',
      imgSrc: '/ctav.jpg'
    }
  ]

  return (
    <UiWrapper className="premiacao-page">
      <Menu />
      <section className="premiacao-header">
        <Link href="/">
          <img className="has-pointer logo" src="/premiacao-logo-ctav.png" alt=""/>
        </Link>
        <img className="titulo" src="/premiacao-titulo-ctav.png" alt=""/>
        <img className="texto" src="/premiacao-texto.png" alt="" srcset=""/>

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

      </section>
    </UiWrapper>
  )
}

export default pageMostra
