import WeatherApp from "./components/WeatherApp.jsx";
import RSSFeedApp from "./components/RSSFeedApp.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="navContainer">
        <nav>
          <h1>Dashboard</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="weatherAppBox">
        <WeatherApp />
      </div>
      <div className="rssFeedBox">
        <RSSFeedApp url="https://cors-anywhere.herokuapp.com/https://9to5linux.com/feed/atom" />
        <RSSFeedApp url="https://cors-anywhere.herokuapp.com/https://dev.to/rss" />
      </div>
    </>
  );
}

export default App;
