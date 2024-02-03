import "./SongPage.css"
import Songs from "../../components/Songs/Songs";

const SongPage = () => {
  return (
    <div className="song-page">
    <h1 className="song-titles">Song</h1>
    <h2 className="song-titles" id="song-artist">Artist Name</h2>
      <div className="posting">
        <Songs />
      </div>
    </div>
  )
}

export default SongPage;