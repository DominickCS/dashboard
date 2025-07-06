import WeatherApp from "./components/WeatherApp.jsx";
import RSSFeedApp from "./components/RSSFeedApp.jsx";
import GTaskComponent from "./components/GTaskComponent.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="navContainer">
        <nav>
          <h1>Dashboard</h1>
          <ul className="navLinks">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://www.gmail.com/">E-mail</a>
            </li>
            <li>
              <a href="/"></a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="headerAppBox">
        <div className="weatherAppBox">
          <WeatherApp />
        </div>
        <div className="googleTasksBox">
          <GTaskComponent />
        </div>
      </div>
      <div className="appsBox">
        <div className="rssFeed">
          <RSSFeedApp url="https://cors-anywhere.herokuapp.com/https://9to5linux.com/feed/atom" />
          <div className="rssFeed">
            <RSSFeedApp url="https://cors-anywhere.herokuapp.com/https://dev.to/rss" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
