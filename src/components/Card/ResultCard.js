import "../../App.css";
import ItemsNeeded from "../CarryItems/ItemsNeeded";

const ResultCard=({results,isLoaded,error,airPollutionResults})=>{
   return <div className="Results">
    {!isLoaded && error && (
        <h3 style={{ color: "red" }}>{error.message}</h3>
    )}
    {isLoaded && results && (
        <>
        <div>
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
        </div>
        
        <div>
            <ItemsNeeded weatherKind={results.weather[0].main} />
        </div>

        <div>
            <h3>Air Pollution Details</h3>
            <p> CO: {airPollutionResults.co}</p>
            <p> NO: {airPollutionResults.no}</p>
            <p> NO2: {airPollutionResults.no2}</p>
            <p> O3: {airPollutionResults.o3}</p>
            <p> SO2: {airPollutionResults.so2}</p>
            <p> PM2_5: {airPollutionResults.pm2_5}</p>
            <p> PM10: {airPollutionResults.pm10}</p>
            <p> NH3: {airPollutionResults.nh3}</p>
        </div>
        
        </>
        )}
    </div> 
}
export default ResultCard;