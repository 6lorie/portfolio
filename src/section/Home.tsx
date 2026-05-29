import Button from "../components/Button";
import "../css/Section.css";

export default function Home() {

    return (
        <section id="home">

            <div className="container-profile">

                {/* ===== LEFT CONTENT ===== */}
                <div className="profile-left">

                    <p className="profile-badge">
                        Computer Engineer
                    </p>

                    <h1>
                        Hi, I'm <span>Glorie May Verayo</span>
                    </h1>

                    <h2>
                        Computer Engineering Graduate
                    </h2>

                    <p className="profile-description">

                        I am a Computer Engineering graduate of
                        Bulacan State University passionate about
                        developing modern and scalable web applications.

                        <br /><br />

                        I specialize in frontend and backend development
                        using React, PHP, Laravel, JavaScript, and MySQL,
                        with experience in real-time systems,
                        software engineering, and modern UI design.

                    </p>

                    {/* ===== BUTTONS ===== */}
                    <div className="button-container">

                        <Button
                            children="Contact Me"
                            variant="ghost"
                        />

                        <Button
                            children="Download Resume"
                            variant="primary"
                        />

                    </div>

                </div>

                {/* ===== RIGHT IMAGE ===== */}
                <div className="profile-right">

                    <div className="image-wrapper">
                        <img
                            src="glorie2.png"
                            alt="Profile"
                        />
                    </div>

                </div>

            </div>

        </section>
    );
}