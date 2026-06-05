import { useState } from "react";
import "../css/Contact.css";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Portfolio Inquiry from ${name}`;

        const body = `
Name: ${name}

Email: ${email}

Message:
${message}
`;

        window.location.href =
            `mailto:gloriemayverayo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="contact-section">

            {/* HEADER */}
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

            {/* CONTACT CONTAINER */}
            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="contact-info">

                    <div className="contact-card">
                        <h2>Email</h2>

                        <a
                            href="mailto:gloriemayverayo@gmail.com"
                            className="contact-link"
                        >
                            gloriemayverayo@gmail.com
                        </a>
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

                {/* FORM */}
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Your Message"
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}