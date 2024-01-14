import './NewPost.css'

const NewPost = () => {
  return (
  <>
    <div className="new-post">
      <div className="head">
        <div id="profile-pic">

        </div>
        <p className="username">
          username
        </p>
      </div>
      <div className="desc-box">
        <textarea className="desc" placeholder='I recommend this because...' >
          
        </textarea>
      </div>
      <div className="tail">
        <button className="post-button" type="submit">
          RECOMMEND
        </button>
      </div>
      <div className="song-choice">

      </div>
    </div>
  </>
  )
}

export default NewPost;