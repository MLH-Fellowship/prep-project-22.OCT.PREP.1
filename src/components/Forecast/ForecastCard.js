import "./ForecastCard.css";

const ForecastCard = ({ forecastData, renderForecastCard }) => {
  const renderCardData =
    forecastData[Object.keys(forecastData)[renderForecastCard]];
  console.log(renderCardData);
  return (
    <div>
      {renderCardData &&
        Object.keys(renderCardData).map(key => (
          <div className="card-container">
            <p>{renderCardData[key].temp}</p>
            <img
              src={`http://openweathermap.org/img/wn/${renderCardData[key].icon}@2x.png`}
            />
          </div>
        ))}
    </div>
  );
};

export default ForecastCard;
