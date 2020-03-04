import React from "react";
import "./style.css";

function About() {
    return (
        <div>
            <div className="aboutUsTitle">
                <h1>About Us</h1>
            </div>
            <div className="twoCol container row">
                <div className="col s3">
                    <h5>
                        Stellar Service
                    </h5>
                </div>
                <div className="col s9">
                    <h6>
                        We achieve customer excellence by anticipating and responding to the needs of our customers for the highest level of quality in our products. We aim to be your team partner of the year, and we achieve this by following rigorous test and development standards that exceed those required by the industry.
                    </h6>
                </div>
            </div>
            <div className="threeCol row">
                <div className="col s4">
                    <div>
                        <i class="large material-icons goldIcon">recent_actors</i>
                        <h5>Our Team</h5>
                        <p className="paragraphInfo">Composed of top-tier engineers supporting spacecraft missions. We proudly support prime contractors and their suppliers to achieve civil, defense, and commercial space program mission requirements.</p>
                    </div>
                </div>
                <div className="col s4">
                    <i class="large material-icons goldIcon">vpn_key</i>
                    <h5>Solutions</h5>
                    <p className="paragraphInfo">Specializing in the use and qualification of COTS electronics and high-end onboard processing and storage solutions for the most stringent customers while also providing cost-effective options for commercial customers.</p>
                </div>
                <div className="col s4">
                    <i class="large material-icons goldIcon">settings_input_antenna</i>
                    <h5>Our Philosophy</h5>
                    <p className="paragraphInfo">Passionately providing the highest quality customer service with superior products and innovative services in the most time & cost efficient manner.</p>
                </div>
            </div>
        </div>
    );
}

export default About;