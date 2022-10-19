import "leaflet/dist/leaflet.css";
import "../../assets/styles/Mapbox.css";
import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker';

/* 
Resources:
1. https://leafletjs.com/examples/quick-start/
2. https://react-leaflet.js.org/
*/
const MapBox = ({coordinates, setCoordinates, setResults, setError, setCity, results, isLoaded, error}) => {
    return (
        <div className="mapbox">
            <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={13} scrollWheelZoom={true} id="map">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker 
                    coordinates={coordinates} 
                    setCoordinates={setCoordinates} 
                    setResults={setResults}
                    setError={setError}
                    setCity={setCity}
                    results={results} 
                    isLoaded={isLoaded} 
                    error={error} 
                />
            </MapContainer>
        </div>
    );
};

export default MapBox;