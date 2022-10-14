import "./ForecastCard.css";

const ForecastCard = ({ forecastData, renderForecastCard }) => {
  const renderCardData =
    forecastData[Object.keys(forecastData)[renderForecastCard]];
  console.log(renderCardData);
  return (
    <div className="card-wrapper">
      {renderCardData &&
        Object.keys(renderCardData).map((key) => (
          <div className="card-container">
            <p>{key}:00 hours</p>
            <p className="temp">
              {Math.round(renderCardData[key].temp - 273.15, 2)}°C
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${renderCardData[key].icon}@2x.png`}
            />
          </div>
        ))}
    </div>
  );
};

export default ForecastCard;
