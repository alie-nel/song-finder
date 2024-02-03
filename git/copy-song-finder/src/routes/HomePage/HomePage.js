import './HomePage.css';
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
  return (
  <>
    <div className="home-page">
      <h1 className="home-title">for all your music loving needs</h1>
      <SearchBar />
    </div>
  </>
)}

export default HomePage;