import "../../App.css";
import ItemsNeeded from "../CarryItems/ItemsNeeded";
const ResultCard=({results,isLoaded,error})=>{
   return <div className="Results">
    {!isLoaded && error && (
        <h3 style={{ color: "red" }}>{error.message}</h3>
    )}
    {isLoaded && results && (
        <>
        <div className="results-content">
            <div className="top-grid">
                <div>
                    <i><p>{results.name}, {results.sys.country}</p></i>
                    <span className="grid-item-text">
                        {Math.round(results.main.temp)}°C
                    </span>
                </div>
                <div className="bottom-grid">
                    <span>{results.weather[0].main}
                    <img
                        src={
                        "http://openweathermap.org/img/w/" +results.weather[0].icon +".png"} alt="Weather icon"
                    /></span>
                    <span>Feels like: {Math.round(results.main.feels_like)}°C</span>
                    <span>Humidity: {results.main.humidity}%</span>
                </div>
                {/* <div className="grid-item"> */}
                {/* </div> */}
            </div>
            {/* <div className="bottom-grid"> */}
                {/* <span>Feels like: {Math.round(results.main.feels_like)}°C</span> */}
                {/* <span>Humidity: {results.main.humidity}%</span> */}
            {/* </div> */}
        </div>
        <div className="results-items">
            <ItemsNeeded weatherKind={results.weather[0].main} />
        </div>
        </>
        )}
    </div>  
}
export default ResultCard;