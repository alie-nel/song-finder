import './Songs.css';
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const Songs = () => {
  const [postDesc, setPostDesc] = useState("");
  const [posts, setPosts] = useState([]);

  const postsCollection = collection(db, "posts");

  const submitPost = async () => {
    try {
      await addDoc(postsCollection, {desc: setPostDesc, humanRec: true});
    } catch (err) {
      console.error(err);
    }
  }

  const getPosts = async () => {
    try {
      const postsData = await getDocs(postsCollection);
      const importantData = postsData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(importantData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  
  return (
  <>
    <div className="new-post">
      <div className="new-head">
        <div id="new-profile-pic">

        </div>
        <p className="new-username">
          username
        </p>
      </div>
      <div className="new-desc-box">
        <textarea
          className="new-desc"
          placeholder='I recommend this because...'
          onChange={(e) => setPostDesc(e.target.value)}
        />
      </div>
      <div className="new-tail">
        <button className="new-post-button" type="submit" onClick={submitPost}>
          RECOMMEND
        </button>
      </div>
      <div className="new-song-choice">

      </div>
    </div>

    {posts.map((post) => (
    <div className="post">
      <div className="post-head">
        <img src={post.profilePic} className="post-profile-pic" />
        <p className="post-username">
          {post.username}
        </p>
        <p className="post-date-posted">
        </p>
      </div>
      <div className="post-desc-box">
        <p className="post-desc">
          {post.desc}
        </p>
      </div>
      <div className="post-tail">
        <button id="post-like-button" className="post-button">

        </button>
        <p id="post-num-likes" className="post-data">
          {post.numLikes}
        </p>
        <button id="post-dislike-button" className="post-button">
          
        </button>
        <p id="post-num-dislikes" className="post-data">
          {post.numDislikes}
        </p>
        <button id="post-comments-button" className="post-button">
          
        </button>
        <p id="post-num-comments" className="post-data">
          {post.numComments}
        </p>
      </div>
    </div>
    ))}
  </>
)}

export default Songs;