import L from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { useMap, Marker, Popup, useMapEvent } from "react-leaflet";

export default function LocationMarker({
    coordinates,
    setCoordinates,
    setResults,
    setError,
    setCity,
}) {
    const [weatherIcon, setWeatherIcon] = useState("10d");

    const greenIcon = new L.Icon({
        iconUrl: "http://openweathermap.org/img/w/" + weatherIcon + ".png",
        iconSize: [35, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    const [position, setPosition] = useState({
        lat: 40.7143,
        lon: -74.006,
    });

    useEffect(() => {
        if (position != null) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?lat=" +
                    position.lat +
                    "&lon=" +
                    position.lon +
                    "&units=metric&appid=" +
                    process.env.REACT_APP_APIKEY
            )
                .then((res) => res.json())
                .then((res) => {
                    if (res["cod"] !== 200) {
                    } else {
                        setResults(res);
                        setCity(res.name);
                        setWeatherIcon(res.weather[0].icon);
                    }
                })
                .catch((error) => {
                    setError(error);
                });
        }
    }, [position]);

    const map = useMap();
    map.setView(coordinates);
    useMapEvent("click", (e) => {
        setCoordinates({
            lat: e.latlng.lat,
            lon: e.latlng.lng,
        });
        setPosition({
            lat: e.latlng.lat,
            lon: e.latlng.lng,
        });
    });

    return coordinates === null ? null : (
        <Marker position={coordinates} icon={greenIcon}>
            <Popup>You are here</Popup>
        </Marker>
    );
}