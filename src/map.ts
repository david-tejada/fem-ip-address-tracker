import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locationIcon = L.icon({
  iconUrl: "/icon-location.svg",
  iconSize: [46, 56],
});

const map = L.map("map", { zoomControl: false });
L.control
  .zoom({
    position: "bottomleft",
  })
  .addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

export function setMapView(lat: number, lng: number) {
  map.setView([lat, lng], 14);
  L.marker([lat, lng], {
    icon: locationIcon,
  }).addTo(map);
}
