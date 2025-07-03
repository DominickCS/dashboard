import WeatherApp from "./components/WeatherApp.jsx"
import './App.css'

function App() {
  
  return (
    <>
      <div className="navContainer">
        <nav>
          <h1>Dashboard</h1>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
        </div>
    <WeatherApp />
    </>
  )
}

export default App
