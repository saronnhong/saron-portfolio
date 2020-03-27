import React from "react";
import "./style.css";

function About() {
    return (
        <div className="about">
            <div className="aboutBanner">
                <div className="whoWeAre">
                    Who We Are
                </div>
            </div>
            <div className="aboutContent container">
                <div className="aboutTitle">About Us</div>
                <p className="aboutText">
                    M&A Inc. supports a range Government and Commercial customers with scientific and engineering consulting services.                </p>
                <p className="aboutText">
                    We specialize in the effect of ionizing radiation on semiconductor electronics and photonics technologies.
                </p>
                <p className="aboutText">
                    Our team of subject matter experts delivers a broad range of expertise from device physics through design and testing that allows us to provide insights into the performance of microelectronics components and systems in all radiation environments to our customers.                 </p>
            </div>
            <nav className="sticky-bottom">
                <a>© 2020 Milanowski & Associates, Inc. All Rights Reserved.</a>
            </nav>
        </div>
    );
}

export default About;