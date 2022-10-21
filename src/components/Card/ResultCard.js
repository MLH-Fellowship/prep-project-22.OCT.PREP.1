import "../../App.css";
import ItemsNeeded from "../CarryItems/ItemsNeeded";
import "./ResultCard.css";

const ResultCard=({results,isLoaded,error,airPollutionResults,aqi})=>{
    let aqiWord = "Very Good";

    if (aqi == 1) aqiWord = "Good";
    if (aqi == 2) aqiWord = "Fair";
    if (aqi == 3) aqiWord = "Moderate";
    if (aqi == 4) aqiWord = "Poor";
    if (aqi == 5) aqiWord = "Very Poor";

   return <div className="Results">
    {!isLoaded && error && (
        <h3 style={{ color: "red" }}>{error.message}</h3>
    )}
    {isLoaded && results && (
        <>
        <div className="container">
            <div className="container__img">
                <img src={"http://openweathermap.org/img/w/" +results.weather[0].icon +".png"} alt="Weather icon"/>
            </div>
            
            <div className="container__info">
                <p>{results.name}, {results.sys.country}</p>
                <p>{results.weather[0].main}</p>
                <p>Feels like {results.main.feels_like}°C</p>
                <p>Humidity {results.main.humidity}%</p>
            </div>
        </div>
        
        <div>
            <ItemsNeeded weatherKind={results.weather[0].main} />
        </div>
        
        <div className="container">
            <h3>Air Quality</h3>
            <p>{aqiWord}</p>
        </div>
        </>
        )}
    </div> 
}
export default ResultCard;