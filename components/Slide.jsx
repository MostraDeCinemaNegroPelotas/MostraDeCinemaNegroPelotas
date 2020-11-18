import React, { useRef } from 'react';
import { useDispatch } from 'react-redux'
import Swiper from 'react-id-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import { triggerPlayer} from 'Redux/player'

const MutipleSlidesPerView = ({ filmes }) => {
  const dispatch = useDispatch()
  const ref = useRef(null);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  }

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  const params = {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    lazy: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: '.arrow-left .arrow',
      prevEl: '.arrow-right .arrow'
    },
    renderPrevButton: () => {
      return (
        <div onClick={goPrev} class="arrow-right arrow"></div>
      )
    },
    renderNextButton: () => {
      return ( 
        <div onClick={goNext} class="arrow-left arrow"></div>
      )
    },
  }

  const playMovie = (filme) =>  dispatch((triggerPlayer(filme.link)))
  
  const voteMovie = (filme) => { 
    if(process.browser) { 
      window.open(filme.votacao,'_blank');
    }
  }


  return (
    <div>
      <Swiper  ref={ref} {...params}>
        {
          filmes.map((filme, index) => (
            <div className="movie-item" key={index}>        
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
            </div>
          ))
        }
      </Swiper>
    </div>
  )
};
export default MutipleSlidesPerView;
