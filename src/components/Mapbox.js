import React from 'react'
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import "../css/Mapbox.css";
import { MapContainer, TileLayer, useMap, Marker, Popup, Icon } from 'react-leaflet'

const greenIcon = new L.Icon({
    iconUrl:
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
	shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const Mapbox = () => {
    return (
        <div className="mapbox">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} id="map">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={greenIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Mapbox;