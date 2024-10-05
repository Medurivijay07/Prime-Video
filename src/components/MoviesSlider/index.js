// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
