import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const Nav = ({ isAuth, setIsAuth }) => {
  let redirect = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        redirect("/login");
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      {!isAuth ? 
        <Link to="/login">Login</Link> 
        : 
        <button onClick={logOut}>Logout</button>}
    </nav>
  )
}

export default Nav;