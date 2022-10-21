import "../../App.css";
import ItemsNeeded from "../CarryItems/ItemsNeeded";
import "./ResultCard.css";

const ResultCard=({results,isLoaded,error,aqi})=>{
    let aqiWord = "Very Good";
    console.log("aqi: "+aqi);
    if (parseInt(aqi) === 1) aqiWord = "Good";
    if (parseInt(aqi) === 2) aqiWord = "Fair";
    if (parseInt(aqi) === 3) aqiWord = "Moderate";
    if (parseInt(aqi) === 4) aqiWord = "Poor";
    if (parseInt(aqi) === 5) aqiWord = "Very Poor";

    if (aqiWord == "Very Good") return (<span>ERROR</span>);

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