import React from "react";
import "./style.css";

function Service() {
    return (
        <div className="service">
            <div className="serviceBanner">
                <h1 className="whatWeDo">What We Do</h1>
            </div>
            <div className="serviceContent container">
                <h1 className="serviceTitle text-center">Services</h1>
                <div className="row serviceRow">
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/raisting-3930778_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Hardening by Process and Design</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/rocket-launch-67721_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Commercial Off The Shelf (COTS) part assessment/grading for use in radiation environments</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/space-station-60615_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Technology Computer Aided Design (TCAD) Simulations & Design of Experiments</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                </div>
                <div className="row serviceRow">
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/raisting-3930778_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Electronic Design Automation (EDA) Flows</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/rocket-launch-67721_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Hardened Process Design Kit (PDK) Development and Assessment</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/space-station-60615_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Component Upset Rate Prediction</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                </div>
                <div className="row serviceRow">
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/raisting-3930778_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Induced Upset Mitigation & Soft Error Analysis</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/rocket-launch-67721_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Testing and Component Analyses</h2>
                    </div>
                    {/* <div className="col-md-4">
                        <img className="serviceListImage" src="/images/space-station-60615_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Testing and Component Analyses</h2>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    {/* <div className="col-md-4">
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div> */}
                </div>
            </div>
            <nav className="sticky-bottom">
                <a>© 2020 Milanowski & Associates, Inc. All Rights Reserved.</a>
            </nav>
        </div>
    );
}

export default Service;