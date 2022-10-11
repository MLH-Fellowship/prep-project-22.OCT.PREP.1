import "leaflet/dist/leaflet.css";
import "../css/Mapbox.css";
import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker';

const MapBox = ({coordinates, setCoordinates}) => {
    return (
        <div className="mapbox">
            <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={13} scrollWheelZoom={true} id="map">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker coordinates={coordinates} setCoordinates={setCoordinates} />
            </MapContainer>
        </div>
    );
};

export default MapBox;