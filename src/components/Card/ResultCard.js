import "../../assets/styles/ResultCard.css";
import ItemsNeeded from "../CarryItems/ItemsNeeded";
import {
    WiThunderstorm,
    WiShowers,
    WiRain,
    WiDayHaze,
    WiSnow,
    WiSmoke,
    WiDust,
    WiFog,
    WiSandstorm,
    WiSmog,
    WiRainWind,
    WiTornado,
    WiDaySunny,
    WiCloudy
  } from "weather-icons-react"

const ResultCard=({results, isLoaded, error})=>{
    const icon = x => {
        if (x === "Rain") return <WiRain />;
        if (x === "Snow") return <WiSnow />;
        if (x === "Clear") return <WiDaySunny size={80}/>;
        if (x === "Clouds") return <WiCloudy />;
        if (x === "Tornado") return <WiTornado />;
        if (x === "Drizzle") return <WiShowers />;
        if (x === "Thunderstorm") return <WiThunderstorm />;
        if (x === "Mist") return <WiDayHaze />;
        if (x === "Squall") return <WiRainWind />;
        if (x === "Dust") return <WiDust />;
        if (x === "Ash") return <WiSmog />;
        if (x === "Sand") return <WiSandstorm />;
        if (x === "Fog") return <WiFog />;
        if (x === "Smoke") return <WiSmoke />;
        if (x === "Haze") return <WiDayHaze />;
        else return <WiDaySunny />;
    };

   return <div className="Results">
    {!isLoaded && error && (
        <h3 style={{ color: "red" }}>{error.message}</h3>
    )}
    {isLoaded && results && (
        <>
        <div className="result-content">
            <div className="grid">
                <div className="grid-item-one">
                    <div className="text">
                        <span className="icon">{icon(results.weather[0].main)}</span>
                        <span>{Math.round(results.main.temp)}°C</span>
                    </div>
                    <span><strong>{results.weather[0].main}</strong></span>
                </div>
                <div className="grid-item-two">
                    <i className="location">{results.name}, {results.sys.country}</i>
                    <span><strong>FEELS LIKE: </strong>{Math.round(results.main.feels_like)}°C</span>
                    <span><strong>HUMIDITY: </strong>{Math.round(results.main.humidity)}%</span>
                </div>
            </div>
        </div>
        <div className="result-items">
            <ItemsNeeded weatherKind={results.weather[0].main} />
        </div>
        </>
        )}
    </div>  
}
export default ResultCard;