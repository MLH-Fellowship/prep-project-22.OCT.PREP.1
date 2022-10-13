import "leaflet/dist/leaflet.css";
import "../../css/Mapbox.css";
import { MapContainer, TileLayer } from 'react-leaflet'
import PlaceMarker from "./PlaceMarker";

const Places = ({coordinates, places}) => {
    return (
        <div className="mapbox">
            <MapContainer center={[coordinates.lat, coordinates.lon]} zoom={16} scrollWheelZoom={true} id="map">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <PlaceMarker 
                    coordinates={coordinates} 
                    places={places}
                />
            </MapContainer>
        </div>
    );
};

export default Places;