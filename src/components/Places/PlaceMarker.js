import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { useMap, Marker, Popup } from 'react-leaflet'

const defaultMarker = new L.Icon({
    iconUrl:
    'https://img.icons8.com/arcade/64/000000/experimental-marker-arcade.png',
	iconSize: [35, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const greenMarker = new L.Icon({
	iconUrl:
		'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
	shadowUrl:
		'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

export default function PlaceMarker({coordinates, places}) {
    const map = useMap();

    map.setView(coordinates);

    return places.map((place)=>{
        if(place.lat===coordinates.lat && place.lon===coordinates.lon){
            return (
                <Marker position={[place.lat, place.lon]} icon={defaultMarker}>
                    <Popup>
                        <h4>{place.name}</h4>
                        <p>{place.address}</p>
                    </Popup>
                </Marker>
            )
        } else {
            return (
                <Marker position={[place.lat, place.lon]} icon={greenMarker}>
                    <Popup>
                        <h1>{place.name}</h1>
                        <h2>Address</h2>
                        <p>{place.address}</p>
                    </Popup>
                </Marker>
            )
        }
    });
}