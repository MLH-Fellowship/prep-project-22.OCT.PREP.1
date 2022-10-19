import "./WeeklyForecastCard.css";

const WeeklyForecastCard = ({ weeklyForecastData }) => {
  const renderWeeklyCardData = weeklyForecastData;
  return (
    <div className="wforecast__card__wrapper">
      {renderWeeklyCardData &&
        Object.keys(renderWeeklyCardData).map(key => (
          <div className="wforecast__card__container">
            <div className="wforecast__card__date">
              <p>{renderWeeklyCardData[key].date}</p>
            </div>

            <div className='wforecast__card__img'>
              <img
              src={`${renderWeeklyCardData[key].icon}`}
              alt="weather icon"
            />
            </div>
            <div className="wforecast__card__temp">
              <span>{renderWeeklyCardData[key].temp}°C</span>
            </div>
            
            <div className="wforecast__card__info">
              <p><span>Climate: </span><span>{renderWeeklyCardData[key].weather_type}</span></p>
              <p><span>Humidity: </span><span>{renderWeeklyCardData[key].humidity}</span></p>
            </div>
            
          </div>
        )
        )}
    </div>
  );
};

export default WeeklyForecastCard;