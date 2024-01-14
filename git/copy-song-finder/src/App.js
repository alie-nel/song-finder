import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import SongPage from './routes/SongPage/SongPage';
import ProfilePage from './routes/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/song" element={<SongPage />}/>
          <Route path="/profile" element={<ProfilePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;