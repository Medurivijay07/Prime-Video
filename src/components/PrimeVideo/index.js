// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')

  return (
    <div className="Prime-main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="bottom-container">
        <h1 className="action-title">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1 className="action-title">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
