import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import SongPage from './routes/SongPage/SongPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div className="App">
      <Router>
        <Nav isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth}/>}/>
          <Route path="/song" element={<SongPage isAuth={isAuth}/>}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
