import React, { Component } from "react";
import Footer from "../../components/Footer";
import "./style.css";

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
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
                        M&A Inc. supports a range of Government and Commercial customers with scientific and engineering consulting services.                </p>
                    <p className="aboutText">
                        We specialize in the effect of ionizing radiation on semiconductor electronics and photonics technologies.
                </p>
                    <p className="aboutText">
                        Our team of subject matter experts delivers a broad range of expertise from device physics through design and testing that allows us to provide insights into the performance of microelectronics components and systems in all radiation environments to our customers.                 </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;