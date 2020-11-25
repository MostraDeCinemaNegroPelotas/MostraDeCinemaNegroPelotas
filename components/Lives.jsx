import React from 'react';
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { triggerPlayer} from 'Redux/player'

const MutipleSlidesPerView = ({ lives }) => {
  const dispatch = useDispatch()
  const playMovie = (filme) =>  dispatch((triggerPlayer(filme.link)))

  return (
    <div className={lives.length > 1 ? "container": ''}>
      {
        lives.map((filme, index) => (
          <div className="card movie-item" key={index}>        
            <div className="movie-item-content">
              <img key={index} className="movie-thumbnail" src={filme.imgSrc}/>
              <div className="movie-play-icon" onClick={() => playMovie(filme)}>
                <FontAwesomeIcon icon={Icons["faPlay"]} />
              </div>
              <div className="movie-details">
                <p className="movie-details-name"> {filme.nome} </p>
                <p className="movie-details-info"> {filme.feat} </p>
                <p className="movie-details-info"> {filme.estado} </p>
                <div className="movie-details-info"> 
                  {
                   filme.data && (
                    <div className="movie-details-time">
                      <FontAwesomeIcon icon={Icons["faClock"]} /> 
                      <p> {filme.data} </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
};
export default MutipleSlidesPerView;
