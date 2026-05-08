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
        { name: "PyTorch", logo: frames.pytorch, class: "ml", tag: "ML Framework", description: "Deep learning framework for building and training neural networks.", date: "2016", stars: "99.8k", language: "Python"},
        { name: "React", logo: frames.react, class: "react", tag: "UI Library", description: "Declarative UI library for building user interfaces.", date: "2013", stars: "245k", language: "JavaScript"},
        { name: "Next.js", logo: frames.nextjs, class: "react", tag: "React Framework", description: "Full-stack React framework for production web applications.", date: "2016", stars: "139k", language: "JavaScript"},
        { name: "Docker", logo: frames.docker, class: "container", tag: "Container Platform", description: "Containerization platform for building and deploying isolated applications.", date: "2013", stars: "71.5k", language: "Go"},
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
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M6 12H10V16H6V12ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p>&nbsp;&nbsp;{framework.date}</p>
                </div>

                <span className="divider"></span>

                <div className="stars">
                    <svg aria-hidden="true" data-component="Octicon" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>
                    <p>&nbsp;{framework.stars}</p>
                </div>

                <span className="divider"></span>

                <div className="language">
                    <svg data-component="Octicon" aria-hidden="true" focusable="false" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>
                    <p>&nbsp;{framework.language}</p>
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