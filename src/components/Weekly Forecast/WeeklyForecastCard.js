import "./WeeklyForecastCard.css";

const WeeklyForecastCard = ({ weeklyForecastData }) => {
  const renderWeeklyCardData = weeklyForecastData;
  return (
    <div className="card-wrapper">
      {renderWeeklyCardData &&
        Object.keys(renderWeeklyCardData).map(key => (
          <div className="card-container">
            <p>{renderWeeklyCardData[key].date}</p>
            <p className="temp">{renderWeeklyCardData[key].temp}°C </p>
            <p>Average Humidity: {renderWeeklyCardData[key].humidity}</p>
            <p>Average Weather: {renderWeeklyCardData[key].weather_type}</p>
            <img
              src={`${renderWeeklyCardData[key].icon}`}
              alt="weather icon"
            />
          </div>
        )
        )}
    </div>
  );
};

export default WeeklyForecastCard;