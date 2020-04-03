import React from "react";
import Footer from "../../components/Footer";
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
                        <h2 className="serviceListTitle">RADIATION HARDENING BY PROCESS AND DESIGN</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/rocket-launch-67721_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">COTS PARTS MISSION ASSURANCE</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/space-station-60615_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">TCAD DESIGN & SIMULATIONS</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className="serviceListText">ASICs, FPGAs, digital, analog, and mixed component & process design for radiation-hardened or radiation tolerant space missions.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Commercial Off The Shelf (COTS) component assessment for use in radiation environment.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Technology Computer Aided Design (TCAD) modeling and analysis, including device operation in radiation environment.</p>
                    </div>
                </div>
                <div className="row serviceRow2">
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/raisting-3930778_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">EDA FLOWS</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/rocket-launch-67721_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">RADIATION HARDENED PDK</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/space-station-60615_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">COMPONENT ANALYSES</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className="serviceListText">Electronic Design Automation (EDA) flow for complex integrated circuit designs.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Process Design Kit (PDK) developemnt and assessment for radiation hardened designs.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Single event rate predictions, total ionizing and non-ionizing dose impact.</p>
                    </div>
                </div>
                <div className="row serviceRow2">
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/raisting-3930778_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">RADIATION INDUCED UPSET MITIGATION</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="serviceListImage" src="/images/rocket-launch-67721_640.jpg" width="95%" alt="service_image" />
                        <h2 className="serviceListTitle">RADIATION TESTING</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p className="serviceListText">Mitigation techniques for radiation-induced upsets in devices and circuits.</p>
                    </div>
                    <div className="col-md-4">
                        <p className="serviceListText">Heavy ion, proton, neutron, and gamma ray radiation test preparation, execution, and reporting.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Service;