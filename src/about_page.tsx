import './about_page.scss'

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Circle, useMap, useMapEvents } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import { useEffect, useRef, useState } from 'react';

import { songs } from "./assets/about_page/songs/songs";

const langModules = import.meta.glob("./assets/about_page/languages/*.png", { eager: true });
const langs = Object.fromEntries(
    Object.entries(langModules).map(([path, mod]) => [
        path.replace("./assets/about_page/languages/", "").replace(".png", "").toLowerCase(),
        (mod as { default: string }).default
    ])
);

const frameModules = import.meta.glob("./assets/about_page/frameworks/*.png", { eager: true });
const frames = Object.fromEntries(
    Object.entries(frameModules).map(([path, mod]) => [
        path.replace("./assets/about_page/frameworks/", "").replace(".png", "").toLowerCase(),
        (mod as { default: string }).default
    ])
);

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
    return <h3><i className="fa">&#xf041;</i>&nbsp; Location</h3>;
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
                pathOptions={{ fillColor: "green", color: "red", fillOpacity: 0.5, opacity: 0 }}
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
    const frameworks = [
        { name: "PyTorch", logo: frames.pytorch, class: "ml", tag: "ML Framework", description: "Deep learning framework for building and training neural networks."},
        { name: "React", logo: frames.react, class: "react", tag: "UI Library", description: "Declarative UI library for building user interfaces."},
        { name: "Next.js", logo: frames.nextjs, class: "react", tag: "React Framework", description: "Full-stack React framework for production web applications."},
        { name: "Docker", logo: frames.docker, class: "container", tag: "Container Platform", description: "Containerization platform for building and deploying isolated applications."},
    ];

    const renderFramework = (framework: any, index: number) => (
        <div key={index} className="framework">
            <div className="header">
                <div className="logo">
                    <img src={`${framework.logo}`}></img>
                </div>

                <div className="info">
                    <h4>{framework.name}</h4>
                    <p className={`${framework.class}`}>{framework.tag}</p>
                </div>

            </div>

            <div className="description">
                <p>{framework.description}</p>
            </div>

            <div className="footer">
                <div className="date">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 4V2.5" stroke="#778899" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#778899" stroke-width="1.5" stroke-linecap="round"></path> <circle cx="16.5" cy="16.5" r="1.5" stroke="#778899" stroke-width="1.5"></circle> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#778899" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#778899" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>                </div>
                    <p>&nbsp;&nbsp;2016</p>
                <div className="stars">

                </div>

                <div className="language">

                </div>
            </div>
        </div>
    )

    return (
        <div className="card stack_skills_wrapper">
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 256 256"><g fill="currentColor"><path d="m220 169.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82"></path><path d="m220 121.09l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82"></path><path d="m28 86.91l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 0 0 0-13.82l-96-56a8 8 0 0 0-8.06 0l-96 56a8 8 0 0 0 0 13.82"></path></g></svg>
                &nbsp; Frameworks
            </h3>

            <div className="frameworks">{frameworks.map((framework, i) => renderFramework(framework, i))}</div>
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
        <a className="card typing_speed_wrapper" href="https://monkeytype.com/profile/Swervey" target="_blank">
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M20 14.4a.8.8 0 1 1 0 1.6a.8.8 0 0 1 0-1.6m-11.2 0h4.8a.8.8 0 1 1 0 1.6H8.8a.8.8 0 1 1 0-1.6M7.2 9.6a.8.8 0 0 1 .8.8V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 0 1 .8-.8m-3.999.759A2.4 2.4 0 0 1 7.2 8.612a2.4 2.4 0 0 1 4 1.788V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6zM17.6 12.8v2.4a.8.8 0 1 1-1.6 0v-2.4h-2.306c-.493 0-.894-.358-.894-.8s.401-.8.894-.8h6.212c.493 0 .894.358.894.8s-.401.8-.894.8zM16.8 8H20a.8.8 0 1 1 0 1.6h-3.2a.8.8 0 1 1 0-1.6M4 14.4h1.6a.8.8 0 1 1 0 1.6H4a.8.8 0 1 1 0-1.6M13.2 8h.4a.8.8 0 1 1 0 1.6h-.4a.8.8 0 1 1 0-1.6M1.6 14.4H0V8.8c0-2.208 1.792-4 4-4h16c2.208 0 4 1.792 4 4v6.4c0 2.208-1.792 4-4 4H4c-2.208 0-4-1.792-4-4v-1.6h1.6v1.6A2.4 2.4 0 0 0 4 17.6h16a2.4 2.4 0 0 0 2.4-2.4V8.8A2.4 2.4 0 0 0 20 6.4H4a2.4 2.4 0 0 0-2.4 2.4z"></path></svg>
                &nbsp; Typing Speed
            </h3>

            {/* <div className="background_typing_speed">
                <p>117</p>
            </div> */}

            <div className="typing_info">
                <div className="typing_speed">
                    <p className="typing_speed">117<span className="small">wpm</span></p>
                </div>

                <div className="typing_stats">
                    <p><i className="fa wpm_symbol">&#xf2f2;</i> 60s &nbsp; &nbsp;<i className="fa wpm_symbol">&#xf140;</i> 98%</p>
                </div>
            </div>
        </a>
    )
}

function YouTubeMusic() {
    const song = songs[2];

    return (
        <a className="card youtube_music_wrapper" href={`${song.url}`} target="_blank">
            <h3 className="youtube_header">
                <svg className="youtube_icon" xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 13.5v-7l6 3.5-6 3.5z" /> </svg>
            </h3>

            <div className="youtube_content">
                <div className="album_art">
                    <img
                        className="album_art"
                        src={`https://img.youtube.com/vi/${song.video_id}/mqdefault.jpg`}
                        alt={`${song.title} by ${song.artist}`}
                    ></img>
                </div>

                <div className="song_info">
                    <p>Last played</p>
                    <p>{`${song.title}`}</p>
                    <p>{`${song.artist}`}</p>
                </div>
            </div>
        </a>
    )
}

function ProgrammingLanguages() {
    const languages = [
        { name: "Java", logo: langs.java, level: 3.4, label: "Advanced", class: "advanced" },
        { name: "TypeScript", logo: langs.typescript, level: 3, label: "Proficient", class: "proficient" },
        { name: "Lua", logo: langs.lua, level: 3.8, label: "Advanced", class: "advanced" },
        { name: "Python", logo: langs.python, level: 2.6, label: "Intermediate", class: "intermediate" },
        { name: "HTML", logo: langs.html, level: 4, label: "Expert", class: "expert" },
        { name: "CSS", logo: langs.css, level: 4, label: "Expert", class: "expert" },
        { name: "JSON", logo: langs.json, level: 1.5, label: "Learning", class: "learning" },
        { name: "SQL", logo: langs.sql, level: 2, label: "Intermediate", class: "intermediate" },
    ];

    const left = languages.slice(0, 4);
    const right = languages.slice(4);

    const keyRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        requestAnimationFrame(() => {
            const els = keyRef.current.filter(Boolean);
            const maxWidth = Math.max(...els.map(el => el.offsetWidth));
            els.forEach(el => (el.style.width = `${maxWidth}px`));
        });
    }, []);

    const renderLanguage = (lang: any, index: number) => (
        <div key={index} className="language">
            <div className="logo">
                <img src={`${lang.logo}`}></img>
            </div>

            <div className="main_section">
                <h4>{lang.name}</h4>

                <div className="skill_segments">
                    {[...Array(4)].map((_, i) => {
                        const isFull = i + 1 <= Math.floor(lang.level);
                        const isPartial = i < lang.level && i + 1 > lang.level;

                        return (
                            <div
                                key={i}
                                className={`segment ${isFull ? "filled" : isPartial ? "partial" : ""
                                    }`}
                                style={
                                    isPartial
                                        ? { "--fill": `${(lang.level % 1) * 100}%` } as React.CSSProperties
                                        : {}
                                }
                            />
                        );
                    })}
                </div>
            </div>

            <div className="skill_key" ref={el => { if (el) keyRef.current[index] = el; }}>
                <p className={`${lang.class}`}>{lang.label}</p>
            </div>
        </div>
    );

    return (
        <div className="card languages_wrapper">
            <h3><i className="fa">&#xf121;</i>&nbsp; Languages</h3>

            <div className="languages">
                <div className="col">{left.map((lang, i) => renderLanguage(lang, i))}</div>
                <div className="col">{right.map((lang, i) => renderLanguage(lang, i + left.length))}</div>
            </div>
        </div>
    );
}

function GithubCommits() {
    return (
        <div className="card github_commits_wrapper">
            <h3><i className="fa">&#xf09b; </i>&nbsp; Github Activity</h3>
        </div>
    )
}

export default AboutPage