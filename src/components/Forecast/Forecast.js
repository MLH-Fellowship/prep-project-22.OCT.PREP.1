import { useState, useEffect } from "react";
import "./Forecast.css";
import ForecastCard from "./ForecastCard";
export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState([]);
  const [renderForecastCard, setRenderForecastCard] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then(res => res.json())
      .then(
        result => {
          if (result["cod"] === "200") {
            let data = {};
            let list = result.list;
            for (let i = 0; i < list.length; i++) {
              //getting the date
              let data_date = list[i].dt_txt;
              data_date = data_date[8].toString() + data_date[9].toString();
              if (typeof data[data_date] == "undefined") {
                data[data_date] = {};
              }

              // getting the time
              let data_time = list[i].dt_txt;
              data_time = data_time[11].toString() + data_time[12].toString();

              // storing the temperature and weather icon at its date and time
              data[data_date][data_time] = {
                temp: list[i].main.temp,
                icon: list[i].weather[0].icon,
              };
            }
            setForecastData(data);
          }
        },
        error => {
          console.log(error);
        }
      );
  }, [city]);

  const handleDateClick = (e, idx) => {
    setRenderForecastCard(idx);
    console.log(forecastData[Object.keys(forecastData)[idx]]);
  };

  return (
    <div className="forecast-container">
      <div className="forecast-title">Hourly Forecast</div>
      <div className="day-row">
        {Object.keys(forecastData).map((day, idx) => (
          <button
            onClick={e => handleDateClick(e, idx)}
            key={idx}
            className="days-btn"
          >
            {day}
          </button>
        ))}
      </div>
      <div>
        <ForecastCard
          forecastData={forecastData}
          renderForecastCard={renderForecastCard}
        />
      </div>
    </div>
  );
}
