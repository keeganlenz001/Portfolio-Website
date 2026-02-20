import './about_page.scss'

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Circle, useMap, useMapEvents } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import { useState } from 'react';

function AboutPage() {
    return (
        <div className="about_page">
            <div className="about_wrapper">
                <Location></Location>
                <StackSkills></StackSkills>
                <CallToAction></CallToAction>
                <TypingSpeed></TypingSpeed>
                <YouTubeMusic></YouTubeMusic>
                <ProgrammingLanguages></ProgrammingLanguages>
                <GithubCommits></GithubCommits>
            </div>
        </div>
    )
}

function MapHeader() {
    return <h3><i className="fa">&#xf041;</i> Location</h3>;
}

function ZoomControls() {
    const [zoom, setZoom] = useState(13);
    const map = useMap();
    
    useMapEvents({
        zoomend: () => {
            setZoom(map.getZoom());
        }
    });
    
    const minZoom = 12; // Default is 0
    const maxZoom = 15; // Default is 18

    let zoomInDisabled = false;
    let zoomOutDisabled = false;
    let zoomInClass = "zoom_button zoom_in";
    let zoomOutClass = "zoom_button zoom_out";
    
    if (zoom >= maxZoom) {
        zoomInDisabled = true;
    } else if (zoom <= minZoom) {
        zoomOutDisabled = true;
    }

    if (zoomInDisabled) {
        zoomInClass = "zoom_button zoom_in hidden";
    } else if (zoomOutDisabled) {
        zoomOutClass = "zoom_button zoom_out hidden";
    }

    return (
        <>
            <button
                onClick={() => map.zoomIn(2)}
                className={zoomInClass}
            >
                <i className="fa">&#xf067;</i>
            </button>

            <button
                onClick={() => map.zoomOut(2)}
                className={zoomOutClass}
            >
                <i className="fa">&#xf068;</i>
            </button>
        </>
    );
}

function Location() {
    const center: LatLngTuple = [40.759926, -111.884888];

    return (
        <MapContainer 
            className="card map_wrapper" 
            center={center} 
            zoom={13}
            zoomControl={false}
            attributionControl={false}
            dragging={false}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            touchZoom={false}
            keyboard={false}
        >
            <MapHeader></MapHeader>

            <ZoomControls></ZoomControls>

            <Circle 
                center={center} 
                radius={500} 
                pathOptions={{ fillColor: "green", color: "red", fillOpacity: 0.5, opacity: 0}}
            />
            <TileLayer
                // url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
}

function StackSkills() {
    return (
        <div className="card stack_skills_wrapper">
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 256 256"><g fill="currentColor"><path d="m220 169.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82"></path><path d="m220 121.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82"></path><path d="m28 86.91l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 0 0 0-13.82l-96-56a8 8 0 0 0-8.06 0l-96 56a8 8 0 0 0 0 13.82"></path></g></svg>
                &nbsp; Frameworks
            </h3>
        </div>
    )
}

function CallToAction() {
    return (
        <div className="card call_to_action_wrapper">
            <button className="call_to_action">See My Projects</button>
        </div>
    )
}

function TypingSpeed() {
    return (
        <div className="card typing_speed_wrapper">
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M20 14.4a.8.8 0 1 1 0 1.6a.8.8 0 0 1 0-1.6m-11.2 0h4.8a.8.8 0 1 1 0 1.6H8.8a.8.8 0 1 1 0-1.6M7.2 9.6a.8.8 0 0 1 .8.8V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 0 1 .8-.8m-3.999.759A2.4 2.4 0 0 1 7.2 8.612a2.4 2.4 0 0 1 4 1.788V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6zM17.6 12.8v2.4a.8.8 0 1 1-1.6 0v-2.4h-2.306c-.493 0-.894-.358-.894-.8s.401-.8.894-.8h6.212c.493 0 .894.358.894.8s-.401.8-.894.8zM16.8 8H20a.8.8 0 1 1 0 1.6h-3.2a.8.8 0 1 1 0-1.6M4 14.4h1.6a.8.8 0 1 1 0 1.6H4a.8.8 0 1 1 0-1.6M13.2 8h.4a.8.8 0 1 1 0 1.6h-.4a.8.8 0 1 1 0-1.6M1.6 14.4H0V8.8c0-2.208 1.792-4 4-4h16c2.208 0 4 1.792 4 4v6.4c0 2.208-1.792 4-4 4H4c-2.208 0-4-1.792-4-4v-1.6h1.6v1.6A2.4 2.4 0 0 0 4 17.6h16a2.4 2.4 0 0 0 2.4-2.4V8.8A2.4 2.4 0 0 0 20 6.4H4a2.4 2.4 0 0 0-2.4 2.4z"></path></svg>
                &nbsp; Typing Speed
            </h3>
            <p>117wpm</p>
            {/* <p><i className="fa">&#xf2f2;</i>60s <i className="fa">&#xf140;</i></p> */}
        </div>
    )
}

function YouTubeMusic() {
    return (
        <div className="card youtube_music_wrapper">
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 13.5v-7l6 3.5-6 3.5z"/> </svg>
            </h3>
        </div>
    )
}

function ProgrammingLanguages() {
    return (
        <div className="card programming_languages_wrapper">
            <h3>
                <i className="fa">&#xf121;</i> Programming Languages
            </h3>
        </div>
    )
}

function GithubCommits() {
    return (
        <div className="card github_commits_wrapper">
            <h3><i className="fa">&#xf09b; </i> Github Activity</h3>
        </div>
    )
}

export default AboutPage