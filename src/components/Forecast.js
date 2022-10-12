import { useState, useEffect } from "react";
export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    console.log(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
    );
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then(res => res.json())
      .then(
        result => {
          if (result["cod"] == 200) {
            setForecastData(result);
            console.log("forecast", result);
          }
        },
        error => {
          console.log(error);
        }
      );
  }, [city]);
  return <div>Forecast</div>;
}
