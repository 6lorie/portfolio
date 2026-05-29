import "../css/Contact.css";

export default function Contact() {

    return (
        <section id="contact" className="contact-section">

            {/* ===== HEADER ===== */}
            <div className="contact-header">

                <p className="contact-badge">
                     Contact Me
                </p>

                <h1>
                    Let's Work Together
                </h1>

                <p className="contact-description">
                    Feel free to reach out for collaborations,
                    freelance projects, internships, or software development opportunities.
                </p>

            </div>

            {/* ===== CONTACT CONTAINER ===== */}
            <div className="contact-container">

                {/* ===== LEFT INFO ===== */}
                <div className="contact-info">

                    <div className="contact-card">
                        <h2>Email</h2>
                        <p>gloriemayverayo@gmail.com</p>
                    </div>

                    <div className="contact-card">
                        <h2>Phone</h2>
                        <p>Hidden</p>
                    </div>

                    <div className="contact-card">
                        <h2>Location</h2>
                        <p>Bulacan, Philippines</p>
                    </div>

                </div>

                {/* ===== FORM ===== */}
                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows={6}
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}