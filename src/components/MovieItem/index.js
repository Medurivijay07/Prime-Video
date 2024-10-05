// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie
  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <>
            <div className="content">
              <button
                data-testid="closeButton"
                type="button"
                onClick={() => close()}
                className="close-button"
              >
                <IoMdClose />
                <ReactPlayer url={videoUrl} />
              </button>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
