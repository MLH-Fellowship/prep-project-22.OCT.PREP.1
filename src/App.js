import { useEffect, useState } from "react";
import "./App.css";
import logo from "./mlh-prep.png";

import MapBox from "./components/Map/MapBox";
import Sunset from "./components/sunTimings/Sunset";
import Sunrise from "./components/sunTimings/Sunrise";
import Forecast from "./components/Forecast/Forecast";
import Places from "./components/Places/Places";
import ResultCard from "./components/Card/ResultCard";
import NavBar from "./components/Navbar/Navbar";

// A timer to help while clearing setTimeout 
// inside `debouncedSuggestLocations` function.
let timerForSuggestedLocations;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);
  const [suggestedLocation, setSuggestedLocation] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 40.7143,
    lon: -74.006,
  });

  const [places, setPlaces] = useState([]);
  const [isPlacesLoaded, setIsPlacesLoaded] = useState(false);
  const [sunrise, setSunrise] = useState("")
  const [sunset, setSunset] = useState("")
  const [timezone, setTimezone] = useState("")
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
      }
    )
  }

  const suggestLocations = () => {
    if(!city) return setSuggestedLocation([]);

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${city}&apiKey=${process.env.REACT_APP_AUTOCOMPLETE_LOCATION_APIKEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        const ci = [];
        res.features.forEach((feature, idx) => {
          ci.push({
            id: idx,
            location: feature.properties.formatted
          });
        });
        setSuggestedLocation(ci);
    });
  };

  const debouncedSuggestLocations = () => {
    clearTimeout(timerForSuggestedLocations);

    timerForSuggestedLocations = setTimeout(() => {
      suggestLocations();
    }, 200);
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
            setSunrise(result.sys.sunrise);
            setSunset(result.sys.sunset);
            setTimezone(result.timezone)
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
  }

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
            address: place.properties.address_line1 + place.properties.address_line2,
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
    <>
    <NavBar />
    <div className={"main " + weather(weatherType)}>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div>
        <h2>Enter a city below 👇 or Click on a location in 🗺</h2>
        <input
          className="search-city-input"
          list="locations"
          type="text"
          value={city}
          onChange={event => {setCity(event.target.value);             
          debouncedSuggestLocations();}}
          pattern={suggestedLocation.join("|")}
          autoComplete="off"
        />

      <div className="">
        <div className="container">
          <Sunrise sunrise={sunrise} timezone={timezone} />
        </div>

        <div className="">
          <Sunset sunset={sunset} timezone={timezone} />
        </div>
      </div>

        <datalist id="locations">
            { suggestedLocation.map((loc) => (
              <option key={loc.id}>{loc.location}</option>
            ))}
        </datalist>

        <MapBox
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          setResults={setResults}
          setError={setError}
          setCity={setCity}
        />
        <ResultCard 
          results={results} 
          isLoaded={isLoaded} 
          error={error} 
        />
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
    </>
  )};
export default App;
