import Button from "../components/Button";
import "../css/Home.css";

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
                    
                    <br />

                    <h2>
                        Computer Engineering Graduate
                    </h2>

                    <p className="profile-description">

                        I am a Computer Engineering graduate with experience in web, software, 
                        and mobile development, data analysis, and virtual assistance. 
                        <br /> <br/>
                        I enjoy creating useful applications, working with data, and 
                        helping with daily tasks and business operations. I am eager 
                        to learn new skills, solve problems, and provide quality work.

                    </p>

                    {/* ===== BUTTONS ===== */}
                    <div className="button-container">

                        <Button
                            children="Contact Me"
                            variant="ghost"
                            onClick={() => {
                                window.location.href = "mailto:gloriemayverayo@gmail.com";
                            }}
                        />

                        <Button
                            children="View Resume"
                            variant="primary"
                            onClick={() => {
                                window.open("/data_files/Glorie_May_Verayo_Resume.pdf", "_blank");
                            }}
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