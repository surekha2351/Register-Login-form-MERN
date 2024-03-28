// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Import the CSS file for styling

function Home() {
    return (
        <div className="homepage">
            {/* Portfolio Navbar */}
            <nav className="portfolio-navbar">
                <div className="logo">Logo</div>
                <ul className="nav-links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* About Section */}
            <section className="about-section">
                <h2>About Me</h2>
                <p>My name is Surekha, a full-stack developer. I have experience working on various projects...</p>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <h2>Skills</h2>
                <p>Skills content goes here...</p>
            </section>

            {/* Experience Section */}
            <section className="experience-section">
                <h2>Experience</h2>
                <p>I did internships at Global Tech as a frontend developer and web developer...</p>
            </section>

            {/* Projects Section */}
            <section className="projects-section">
                <h2>Projects</h2>
                <p>Projects content goes here...</p>
            </section>

            {/* Contact Details */}
            <section className="contact-details">
                <h2>Contact Me</h2>
                <p>Contact details content goes here...</p>
            </section>
        </div>
    );
}

export default Home;
