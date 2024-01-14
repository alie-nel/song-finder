import "./SongPage.css"
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";

const SongPage = () => {
  return (
    <>
    <h1>Song</h1>
      <div className="posting">
        <NewPost />
        <Post />
      </div>
    </>
  )
}

export default SongPage;