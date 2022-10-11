import { useEffect, useState } from "react";
import './App.css';
import logo from './mlh-prep.png'

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City")
  const [results, setResults] = useState(null);
  const[coordinates,setCoordinates]=useState({lat:40.7128,lon:-74.0060});
  function success(position) {
    setCoordinates({lat:position.coords.latitude, lon:position.coords.longitude});
  }
  
  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success);
    }
    else{
      alert("Geolocation is not supported by this browser.");
    }
  }, [])

  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/weather?lat="+coordinates.lat+"&lon="+coordinates.lon+"&limit=5&appid=" + process.env.REACT_APP_APIKEY)
    .then(res => res.json())
    .then(
      (result) => {
        if (result['cod'] !== 200) {
          setIsLoaded(false);
        } else {
          setIsLoaded(true);
          setResults(result);
          setCity(result.name + ", " + result.sys.country);
        }
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [coordinates])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return <>
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
    </>
  }
}

export default App;
