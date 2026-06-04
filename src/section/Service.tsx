import "../css/Service.css";

export default function Service() {
    return (
        <section id="service">

            <div className="service-header">

                <h1>Services</h1>

                <p>
                    I provide technical and administrative solutions to help
                    businesses streamline operations, improve efficiency,
                    and achieve their goals.
                </p>

            </div>

            <div className="service-grid">

                {/* Data Analyst */}
                <div className="service-card">

                    <div className="service-icon">
                        <img src="https://iconsvg.co/icon/08dbb3cd-1a86-4abe-84f3-ec609bc31a6f.svg" alt="Data Analyst" />
                    </div>

                    <h2>Data Analyst</h2>

                    <p>
                        Transforming raw data into meaningful insights through
                        data cleaning, visualization, reporting, and analysis
                        using spreadsheets and analytical tools.
                    </p>

                    <ul>
                        <li>Data Cleaning & Preparation</li>
                        <li>Excel & Google Sheets</li>
                        <li>Data Visualization</li>
                        <li>Dashboard Reporting</li>
                        <li>Basic Statistical Analysis</li>
                    </ul>

                </div>

                {/* Developer */}
                <div className="service-card">

                    <div className="service-icon">
                        <img src="https://www.svgrepo.com/show/478541/laptop.svg" alt="Developer" />
                    </div>

                    <h2>Developer</h2>

                    <p>
                        Building responsive websites, applications, and
                        software solutions with modern technologies and
                        user-focused design principles.
                    </p>

                    <ul>
                        <li>Web Development</li>
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Database Management</li>
                        <li>Software Development</li>
                    </ul>

                </div>

                {/* Virtual Assistant */}
                <div className="service-card">

                    <div className="service-icon">
                        <img src="https://www.svgrepo.com/show/385158/headphones-head-set-chat-live-support.svg" alt="Virtual Assistant" />
                    </div>

                    <h2>Virtual Assistant</h2>

                    <p>
                        Providing reliable administrative support to help
                        businesses stay organized and productive through
                        efficient communication and task management.
                    </p>

                    <ul>
                        <li>Email Management</li>
                        <li>Calendar Scheduling</li>
                        <li>Data Entry</li>
                        <li>Documentation</li>
                        <li>Administrative Support</li>
                    </ul>

                </div>

            </div>

        </section>
    );
}