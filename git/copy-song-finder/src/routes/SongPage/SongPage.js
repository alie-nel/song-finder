import "./SongPage.css"
import NewPost from "../../components/Posts/NewPost";
import Post from "../../components/Posts/Post";

const SongPage = ({ isAuth }) => {
  return (
    <div className="song-page">
      <h1 className="song-titles">Song</h1>
      <h2 className="song-titles" id="song-artist">Artist Name</h2>
        
        <NewPost isAuth={isAuth}/>
        <Post isAuth={isAuth}/>
    </div>
  )
}

export default SongPage;