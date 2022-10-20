import "../../App.css";
import ItemsNeeded from "../CarryItems/ItemsNeeded";
const ResultCard=({results,isLoaded,error})=>{
   return <div className="Results">
    {!isLoaded && error && (
        <h3 style={{ color: "red" }}>{error.message}</h3>
    )}
    {isLoaded && results && (
        <>
        <img
            src={
            "http://openweathermap.org/img/w/" +results.weather[0].icon +".png"} alt="Weather icon"
        />
        <h3>{results.weather[0].main}</h3>
        <p>{results.weather[0].description}</p>
        <p>Feels like {results.main.feels_like}°C</p>
        <p>Humidity {results.main.humidity}%</p>
        <i>
            <p>
            {results.name}, {results.sys.country}
            </p>
        </i>
        <ItemsNeeded weatherKind={results.weather[0].main} />
        </>
        )}
    </div> 
}
export default ResultCard;