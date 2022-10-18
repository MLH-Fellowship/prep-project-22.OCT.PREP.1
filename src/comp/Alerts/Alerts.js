import { useState, useEffect } from "react";
import "./Alerts.css";
export default function Alerts({ city }) {
//   const [forecastData, setForecastData] = useState([]);
//   const [renderForecastCard, setRenderForecastCard] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["cod"] === "200") {
            console.log(result);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, [city]);

  return (
    <div className="alerts-wrapper">
    <div className="alerts-container">
      <div className="alerts-title">⚠️Severe Weather Alerts</div>
      <div className="alerts-content">
        <details>
          <summary>Alerts title</summary>
          <p>Alerts description appears here</p>
        </details>
      </div>
    </div>
    </div>
  );
}
