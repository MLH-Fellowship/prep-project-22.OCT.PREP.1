import { useState, useEffect } from "react";
import "./Alerts.css";
export default function Alerts({ city }) {
  const [alerts, setAlerts] = useState({});
  useEffect(() => {
    fetch(
      `https://api.weatherbit.io/v2.0/alerts?&city=${city}&key=${process.env.REACT_APP_ALERTKEY}`
    )
      .then(res => res.json())
      .then(
        result => {
          console.log("alerts", result);
          setAlerts(result);
        },
        error => {
          console.log(error);
        }
      );
  }, [city]);

  const alertCard =
    alerts?.alerts?.length > 0 ? (
      <div className="alerts-wrapper">
        <div className="alerts-container">
          <div className="alerts-title">⚠️Severe Weather Alerts</div>
          <div className="alerts-content">
            <details>
              <summary>{alerts.alerts[0].title}</summary>
              <p>{alerts.alerts[0].description}</p>
            </details>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );

  return alertCard;
}
