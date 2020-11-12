import Wrapper from 'components/Wrapper'
import MoviesWrapper from 'components/Movies/MoviesWrapper'
import Movies from 'components/Movies/Movies'
import moviesMock from './movies'

const Filmes = () => {
  const createMovies = () => {
    return (
      moviesMock.map((movies, index) =>
        <Movies movies={movies} key={index}/>
      )
    )
  }

  return (
    <Wrapper padding="50px 120px" className="movies-page">
      <h3 style={{ fontSize: '3em', marginBottom: '30px' }}> Catálogo 2020 </h3>

      <MoviesWrapper>
        { createMovies() }
      </MoviesWrapper>

    </Wrapper>
  )
}

export default Filmes
