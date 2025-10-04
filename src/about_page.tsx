import './about_page.scss'

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Circle } from "react-leaflet";
import type { LatLngTuple } from "leaflet";

function AboutPage() {
    return (
        <div className="about_page">
            <div className="about_wrapper">
                <Map></Map>
            </div>
        </div>
    )
}

function Map() {
    const center: LatLngTuple = [40.759926, -111.884888];

    return (
        <MapContainer className="map" center={center} zoom={13}>
            <Circle center={center} radius={500} pathOptions={{ fillColor: "lime", color: "lime", fillOpacity: 0.3 }}></Circle>
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"></TileLayer>
        </MapContainer>
    );
}

export default AboutPage