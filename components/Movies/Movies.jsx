import MovieCard from './MovieCard'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'

const Movies = ({ movies }) => {
  const { moviesTitle, videos } = movies

  return (
    <div className="movies">
      <p className="movies-title"> { moviesTitle } </p>
      <Carousel
        plugins={[
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4
            }
          }
        ]}
      >
        {(
          videos.map((video, index) => (
            <MovieCard
              title={video.name}
              description="lorem ipsum bla bla"
              key={index}
              className="movies-item"
              bgImg={video.thumbnail}
            >
              {video.name}
              {video.link}
            </MovieCard>
          ))
        )}
      </Carousel>
    </div>
  )
}

export default Movies
