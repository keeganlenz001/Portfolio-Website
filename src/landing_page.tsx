import './landing_page.scss'

import journal from './assets/landing_page/images/journal.webp'
import laptop from './assets/landing_page/images/laptop.webp'
import headphones from './assets/landing_page/images/headphones.webp'
import mac from './assets/landing_page/images/mac.webp'
import pen from './assets/landing_page/images/pen.webp'

import profile_pic from './assets/landing_page/images/profile_pic.jpg'

function LandingPage() {
    return (
        <div className="landing_page">
            <BackgroundImages></BackgroundImages>
            <ProfilePicture></ProfilePicture>
            <Introduction></Introduction>
        </div>
    );
}

function BackgroundImages() {
    return (
        <div className="background_images_wrapper">
            <img className="journal" src={journal} alt="Picture of journal"></img>
            <img className="laptop" src={laptop} alt="Picture of laptop"></img>
            <img className="headphones" src={headphones} alt="Picture of headphones"></img>
            <img className="mac" src={mac} alt="Picture of mac"></img>
            <img className="pen" src={pen} alt="Picture of pen"></img>
        </div>
    )
}

function ProfilePicture() {
    return (
        <div className="profile_picture_wrapper">
            <img src={profile_pic} alt="Picture of Keegan Lenz"></img>
        </div>
    );
}

function Introduction() {
    return (
        <div className="introduction">
            <header>
                <h1>Hi, I'm <span style={{ color: "#8d697a" }}>Keegan.</span> A software developer.</h1>
            </header>
            <p>Multidisciplinary programmer based in Salt Lake City. Experienced problem-solver, eager to learn and build. I develop full-stack web applications, video games, and graphics programs.</p>
        </div>
    );
}

export default LandingPage