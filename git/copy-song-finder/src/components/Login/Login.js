import "./Login.css";
import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  console.log(auth?.currentUser?.email);

  const login = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err)
    }
  }

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Sign In</button>
      <button onClick={googleLogin}>Sign In With Google</button>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default Login;