import './PersonSong.css'

const PersonSong = () => {
  return (
  <>
    <div className="person-song">
      <div className="song-choice">

      </div>
      <div className="tail">
        <button id="star-button" className="button">
          
        </button>
        <button id="like-button" className="button">
          
        </button>
        <p id="num-likes" className="song-data">
          23
        </p>
        <button id="dislike-button" className="button">
          
        </button>
        <p id="num-dislikes" className="song-data">
          2
        </p>
        <button id="comments-button" className="button">
          
        </button>
        <p id="num-comments" className="song-data">
          4
        </p>
      </div>
    </div>
  </>
)}

export default PersonSong;