import { useEffect, useState } from "react";
import "./App.css";
import logo from "./mlh-prep.png";

import ItemsNeeded from "./components/CarryItems/ItemsNeeded";

import MapBox from "./components/Map/MapBox";
import Forecast from "./components/Forecast/Forecast";
import Places from "./components/Places/Places";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);
  const [coordinates, setCoordinates] = useState({
    lat: 40.7143,
    lon: -74.006,
  });

  const [places, setPlaces] = useState([]);
  const [isPlacesLoaded, setIsPlacesLoaded] = useState(false);
  const [weatherType, setWeatherType] = useState("");

  const findUserLocation = position => {
    const latitude = position.coords.latitude,
      longitude = position.coords.longitude;
    fetch(
      "https://api.openweathermap.org/geo/1.0/reverse?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&limit=5&appid=" +
        process.env.REACT_APP_APIKEY
    )
      .then(res => res.json())
      .then(result => {
        setCity(result[0].name);
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setCity(result[0].name);
      });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(findUserLocation);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        process.env.REACT_APP_APIKEY
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          if (result["cod"] !== 200) {
            setIsLoaded(false);
            setError(result);
          } else {
            setIsLoaded(true);
            setResults(result);
            setCoordinates(result.coord);
            setWeatherType(result.weather[0].main);
          }
        },
        error => {
          setIsLoaded(false);
          setError(error);
          setWeatherType(error);
        }
      );
  }, [city]);

  const weather = weatherType => {
    switch (weatherType) {
      case "Clouds":
        return "cloudy";
      case "Clear":
        return "clear";
      case "Rain":
        return "rainy";
      case "Snow":
        return "snowy";
      case "Thunderstorm":
        return "stormy";
      case "Drizzle":
        return "drizzly";
      default:
        return "haze";
    }
  };

  useEffect(() => {
    fetch(
      "https://api.geoapify.com/v2/places?categories=tourism.sights&bias=proximity:" +
        coordinates.lon +
        "," +
        coordinates.lat +
        "&limit=10&apiKey=" +
        process.env.REACT_APP_GEOKEY
    )
      .then(resp => resp.json())
      .then(data => {
        setIsPlacesLoaded(false);
        let tempPlaces = [];
        data.features.forEach(place => {
          const temp = {
            name: place.properties.name,
            address:
              place.properties.address_line1 + place.properties.address_line2,
            lat: place.properties.lat,
            lon: place.properties.lon,
          };
          tempPlaces.push(temp);
        });
        tempPlaces = [
          ...tempPlaces,
          {
            name: "Your Location",
            address: "You are here!",
            lat: coordinates.lat,
            lon: coordinates.lon,
          },
        ];
        setPlaces(tempPlaces);
        setIsPlacesLoaded(true);
      });
  }, [coordinates]);

  return (
    <div className={"main " + weather(weatherType)}>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div>
        <h2>Enter a city below 👇 or Click on a location in 🗺</h2>
        <input
          type="text"
          value={city}
          onChange={event => setCity(event.target.value)}
        />
        <MapBox
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setResults={setResults}
          setError={setError}
          setCity={setCity}
        />
        <div className="Results">
          {!isLoaded && error && (
            <h3 style={{ color: "red" }}>{error.message}</h3>
          )}
          {isLoaded && results && (
            <>
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  results.weather[0].icon +
                  ".png"
                }
                alt="Weather icon"
              />
              <h3>{results.weather[0].main}</h3>
              <p>{results.weather[0].description}</p>
              <p>Feels like {results.main.feels_like}°C</p>
              <p>Humidity {results.main.humidity}%</p>
              <i>
                <p>
                  {results.name}, {results.sys.country}
                </p>
              </i>
              <ItemsNeeded weatherKind={results.weather[0].main} />
            </>
          )}
        </div>
        <div>
          <h2>
            Explore places nearby to <span className="places">{city}</span>
          </h2>
          {isPlacesLoaded === true ? (
            <Places coordinates={coordinates} places={places} />
          ) : (
            <h2>Loading nearby places!</h2>
          )}
        </div>
      </div>
      <Forecast city={city} />
    </div>
  );
}
export default App;
