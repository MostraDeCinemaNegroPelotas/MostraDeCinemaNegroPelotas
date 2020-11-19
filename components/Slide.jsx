import React from 'react';
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import { triggerPlayer} from 'Redux/player'
import { animated } from "react-spring";


const MutipleSlidesPerView = ({ filmes }) => {
  const dispatch = useDispatch()

  const playMovie = (filme) =>  dispatch((triggerPlayer(filme.link)))
  
  const voteMovie = (filme) => { 
    if(process.browser) { 
      window.open(filme.votacao,'_blank');
    }
  }

  return (
    <div className="container">
      {
        filmes.map((filme, index) => (
          <animated.div  className="card movie-item" key={index}>        
            <div className="movie-item-content">
              <img key={index} className="movie-thumbnail" src={filme.pic}/>
              <div className="movie-play-icon" onClick={() => playMovie(filme)}>
                <FontAwesomeIcon icon={Icons["faPlay"]} />
              </div>
              <div className="movie-details">
                <p className="movie-details-name"> {filme.nomedofilme} </p>
                <p className="movie-details-info"> Direção: {filme.direcao} </p>
                <p className="movie-details-info"> {filme.estado} </p>
                <div className="movie-details-info"> 
                  <div className="movie-details-time">
                    <FontAwesomeIcon icon={Icons["faClock"]} /> 
                    <p> {filme.minutos} min </p>
                  </div>
                  <div className="movie-details-favorite" onClick={() => voteMovie(filme)}>
                    <FontAwesomeIcon data-tip data-for='tooltip-favorite' icon={Icons["faHeart"]} />
                    <ReactTooltip id='tooltip-favorite' type='error'>
                      <span>Clique para votar no filme</span>
                    </ReactTooltip>
                    </div>
                </div>
              </div>
            </div>
          </animated.div>
        ))
      }
    </div>
  )
};
export default MutipleSlidesPerView;
