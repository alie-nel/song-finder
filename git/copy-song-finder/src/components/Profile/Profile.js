import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="head">
        <div className="profile-pic">

        </div>
        <p className="username">
          username
        </p>
      </div>
      <div className="buttons">
        <button id="starred-button" className="button">
          STARRED
        </button>
        <button id="liked-button" className="button">
          LIKED
        </button>
        <button id="posts-button" className="button">
          POSTS
        </button>
      </div>
    </div>
  )
}

export default Profile;