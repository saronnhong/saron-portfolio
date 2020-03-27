import React from "react";
import "./style.css";

function Service() {
    return (
        <div className="service">
            <div className="serviceBanner">
                <h1 className="whatWeDo">
                    What We Do
                </h1>
            </div>
            <div className="serviceContent container">
                <h1 className="serviceTitle text-center">
                    Services
                </h1>
                <p className="serviceText">
                    Every day, our 110,000 employees come to work with one focus – our customers’ missions. Whether it's protecting citizens or advancing the boundaries of science, these missions are some of the most important and challenging in the world. We bring an unwavering commitment to help our customers succeed, and it’s that sense of purpose and opportunity to make a difference in the world that drives us every day.
                </p>
                <div className="row serviceRow">
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/raisting-3930778_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Hardening by Process and Design for ASICs & FPGAs</h2>
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/rocket-launch-67721_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Electronic Design Automation (EDA) Flows</h2>
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/space-station-60615_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Testing and Component Analyses</h2>
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                </div>
                <div className="row serviceRow">
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/raisting-3930778_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Hardening by Process and Design for ASICs & FPGAs</h2>
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/rocket-launch-67721_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Electronic Design Automation (EDA) Flows</h2>
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/space-station-60615_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">Radiation Testing and Component Analyses</h2>
                        <p className="serviceListText">Protecting the U.S., its friends and allies has never been more urgent. Our missile-defense systems aim to put the best technology up against the world's most pressing threats.</p>
                    </div>
                </div>
            </div>
            <nav className="sticky-bottom">
                <a>© 2020 Milanowski & Associates, Inc. All Rights Reserved.</a>
            </nav>
        </div>
    );
}

export default Service;