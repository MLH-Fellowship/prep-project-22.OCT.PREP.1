const ForecastCard = ({ forecastData, renderForecastCard }) => {
  return <div> {Object.keys(forecastData)[renderForecastCard]}</div>;
};

export default ForecastCard;
