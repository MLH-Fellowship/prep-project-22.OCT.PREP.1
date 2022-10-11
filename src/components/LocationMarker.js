import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import "../css/Mapbox.css";
import { useMap, Marker, Popup } from 'react-leaflet'

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

export default function LocationMarker({coordinates, setCoordinates}) {
    const map= useMap();
    map.setView(coordinates);
    map.on('click', (e)=>{
        setCoordinates({
            lat: e.latlng.lat,
            lon: e.latlng.lng
        })
    })

    return coordinates === null ? null : (
        <Marker position={coordinates} icon={greenIcon}>
            <Popup>You are here</Popup>
        </Marker>
    );
}