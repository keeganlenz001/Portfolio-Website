import './landing_page.scss'
import profile_pic from './assets/landing_page/profile_pic.jpg'

function LandingPage() {
    return (
        <div className="landing_page">
            <ProfilePicture></ProfilePicture>
            <Introduction></Introduction>
        </div>
    );
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