import { useEffect, useState } from "react";
import './App.css';
import logo from './mlh-prep.png'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [results, setResults] = useState(null);
  const [weatherType, setWeatherType] = useState("")

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=" + process.env.REACT_APP_APIKEY)
      .then(res => res.json())
      .then(
        (result) => {
          if (result['cod'] !== 200) {
            setIsLoaded(false)
          } else {
            setIsLoaded(true);
            console.log(result)
            setResults(result);
            setWeatherType(result.weather[0].main);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          setWeatherType(error);
        }
      )
  }, [city])

  const weather = (weatherType) => {
    switch(weatherType) {
      case "Clouds":
        return "cloudy"
      case "Clear":
        return "clear"
      case "Rain":
        return "rainy"
      case "Snow":
        return "snowy"
      case "Thunderstorm":
        return "stormy"
      case "Drizzle":
        return "drizzly"
      default:
        return "haze"
    }
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <div className={weather(weatherType)}>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div>
        <h2>Enter a city below 👇</h2>
        <input
          type="text"
          value={city}
          onChange={event => setCity(event.target.value)} />
        <div className="Results">
          {!isLoaded && <h2>Loading...</h2>}
          {console.log(results)}
          {isLoaded && results && <>
            <h3>{results.weather[0].main}</h3>
            <p>Feels like {results.main.feels_like}°C</p>
            <i><p>{results.name}, {results.sys.country}</p></i>
          </>}
        </div>
      </div>
    </div>
  }
}

export default App;
