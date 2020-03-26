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
                    M&A Inc. supports a range of commercial and Government customers with scientific and engineering consulting services. We specialize in radiation effects on semiconductor electronics and photonics technology.
                </p>
                <p className="aboutText">
                    Our team of subject matter experts delivers a broad range of expertise from device physics through design and testing that allows us to provide clear insights into the performance of microelectronics in all radiation environments to our customers.
                </p>
            </div>

        </div>
    );
}

export default About;