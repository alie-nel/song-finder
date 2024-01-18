import "./SongPage.css"
import Songs from "../../components/Songs/Songs";

const SongPage = () => {
  return (
    <>
    <h1>Song</h1>
      <div className="posting">
        <Songs />
      </div>
    </>
  )
}

export default SongPage;