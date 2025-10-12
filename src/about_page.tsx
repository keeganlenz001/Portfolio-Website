import './about_page.scss'

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Circle } from "react-leaflet";
import type { LatLngTuple } from "leaflet";

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

function Location() {
    const center: LatLngTuple = [40.759926, -111.884888];

    return (
        <MapContainer className="map_wrapper" center={center} zoom={13}>
            <Circle center={center} radius={500} pathOptions={{ fillColor: "lime", color: "lime", fillOpacity: 0.3 }}></Circle>
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"></TileLayer>
        </MapContainer>
    );
}

function StackSkills() {
    return (
        <div className="stack_skills_wrapper">
            <h3>Fullstack Frameworks</h3>
        </div>
    )
}

function CallToAction() {
    return (
        <div className="call_to_action_wrapper">
            <button className="call_to_action">See My Projects</button>
        </div>
    )
}

function TypingSpeed() {
    return (
        <div className="typing_speed_wrapper">
            <h3>117wpm</h3>
            {/* <p><i className="fa">&#xf2f2;</i>60s <i className="fa">&#xf140;</i></p> */}
        </div>
    )
}

function YouTubeMusic() {
    return (
        <div className="youtube_music_wrapper">
            <h3>YouTube Music</h3>
        </div>
    )
}

function ProgrammingLanguages() {
    return (
        <div className="programming_languages_wrapper">
            <h3>Programming Languages</h3>
        </div>
    )
}

function GithubCommits() {
    return (
        <div className="github_commits_wrapper">
            <h3>Github Commits</h3>
        </div>
    )
}

export default AboutPage