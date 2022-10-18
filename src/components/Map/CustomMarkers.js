import L from 'leaflet';
import { Marker } from "react-leaflet";

// Group2xx represents thunderstrom
export const Group2xx = new L.Icon({
  iconUrl: "http://openweathermap.org/img/w/11d.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Group3xx denotes drizzle
export const Group3xx = new L.Icon({
  iconUrl: "http://openweathermap.org/img/w/09d.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Group5xx denotes rain
export const Group5xx = new L.Icon({
  iconUrl: "http://openweathermap.org/img/w/10d.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Group6xx denotes snow
export const Group6xx = new L.Icon({
  iconUrl: "http://openweathermap.org/img/w/13d.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Group800 denotes clear weather
export const Group800 = new L.Icon({
  iconUrl: "http://openweathermap.org/img/w/01d.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Group80x denotes cloudy
export const Group80x = new L.Icon({
  iconUrl: "http://openweathermap.org/img/w/03d.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});