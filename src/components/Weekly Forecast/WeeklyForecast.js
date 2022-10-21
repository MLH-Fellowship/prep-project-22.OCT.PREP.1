import { useState, useEffect } from "react";
import "./WeeklyForecast.css";
import WeeklyForecastCard from "./WeeklyForecastCard";

export default function WeeklyForecast({ city }) {
  const [weeklyForecastData, setWeeklyForecastData] = useState([]);
  const [renderWeeklyForecastCard, setRenderWeeklyForecastCard] = useState(0);
  const [apierror, setApierror] = useState(true);

  useEffect(() => {
    fetch("https://api.weatherapi.com/v1/forecast.json?key="+process.env.REACT_APP_WEEKLYFORECASTAPIKEY+"&q="+city+"&days=7&aqi=yes&alerts=yes")
      .then((res) => {
        if (res.status == 400 || res.status == 401 || res.status == 403) {
          setApierror(false);
          console.log(res.status);
          return <h3>Invalid API key</h3>
        }
        else if (res.status == 200)
          return res.json()
      })
      .then((result) => {
          console.log("results from Weekly forecast", result);
          let data = {};
          let list = result.forecast.forecastday;
          for (let i = 0; i < list.length; i++) {
            let date = list[i].date;
            let average_temp = list[i].day.avgtemp_c;
            let average_humidity = list[i].day.avghumidity;
            let average_weather_type = list[i].day.condition.text;
            let icon_path = "https:" + list[i].day.condition.icon;

            // storing the date, temperature, humidity, weather type and weather icon at ith index (ranging from 0 to 6)
            data[i] = {
              date: date,
              temp: average_temp,
              humidity: average_humidity,
              weather_type: average_weather_type,
              icon: icon_path,
            };
            console.log("ith value", i, data[i]);
          }
          setWeeklyForecastData(data);
        },
        error => {
          console.log(error);
        }
      );
  }, [city]);

  return (
    (apierror &&
    <div className="wforecast__container">
      <div className="wforecast__title">Weekly Forecast</div>
      <WeeklyForecastCard weeklyForecastData={weeklyForecastData}/>
    </div>
    )
  );
}