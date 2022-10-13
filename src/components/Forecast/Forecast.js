import { useState, useEffect } from "react";
import "./Forecast.css";

export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then(res => res.json())
      .then(
        result => {
          if (result["cod"] === "200") {
            setForecastData(result);
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
              // console.log("date:",data_date,"time:",data_time,data[data_date][data_time]);
            }
            setFilterData(data);
            console.log("Data", data, data["13"]["03"]);
            console.log("forecast", list);
            let keys = Object.keys(data["13"]);
            for (let i = 0; i < keys.length; i++) {}
            console.log("Forecast", data);
          }
        },
        error => {
          console.log(error);
        }
      );
  }, [city]);

  const expandDate = (e, idx) => {
    console.log(filterData[Object.keys(filterData)[idx]]);
  };

  return (
    <div className="forecast-container">
      {
        Object.keys(filterData).map((day, idx) => (
          <button
            onClick={e => expandDate(e, idx)}
            key={idx}
            className="days-btn"
          >
            {day}
          </button>
        ))
        // <img
        //   src={`http://openweathermap.org/img/wn/${filterData["14"]["03"].icon}@2x.png`}
        // />
      }
    </div>
  );
}
