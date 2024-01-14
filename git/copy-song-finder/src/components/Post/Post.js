import './Post.css'

const Post = () => {
  return (
  <>
    <div className="post">
      <div className="head">
        <div className="profile-pic">

        </div>
        <p className="username">
          username
        </p>
      </div>
      <div className="desc-box">
        <p className="desc">
          
        </p>
      </div>
      <div className="tail">
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

export default Post;