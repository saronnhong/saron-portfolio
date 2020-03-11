import React from "react";
import "./style.css";
import Modal from "../../components/Modal"

function Service() {
    return (
        <div>
            <div className="row">
                <div className="aboutUsTitle">
                    <h1>Services</h1>
                </div>
            </div>
            <div className="twoCol container row">
                <div className="col s3">
                    <h5>
                        <b>Exceptional Customer Care</b>
                    </h5>
                </div>
                <div className="col s9 col9section">
                    <h6>
                        Inspiring & implementing creative solutions.
                    </h6>
                </div>
            </div>
            <div className="row serviceItems">
                <div>
                    <button className="col s4 serviceBox" >
                        <i className="material-icons large">directions</i>
                        <p className="buttonTitle">Radiation Hardening by Process</p>
                        <p className="buttonText">& Design for ASICs & FPGAs</p>
                        <br></br>
                        {/* <a className="waves-effect waves-light btn-large green">More Info</a> */}
                        <Modal id="1" header="Radiation Hardening by Process & Design for ASICs & FPGAs" content="Dramatic increases in sensor resolution in remote-sensing space payloads are causing a processing bottleneck, as downlink bandwidth is not keeping pace. Operators require onboard processing so that satellites send processed information, not just raw data. It is a growing challenge for the roughly 100 remote sensing satellites launched each year, each carrying as many as eight payload instruments. Flash-based field-programmable gate array (FPGA) technology is now being applied to the problem, combining high-speed signal processing with special built-in radiation mitigation techniques to keep systems operational in harsh radiation environments." />
                    </button>
                    <button className="col s4 serviceBox2" >
                        <i className="material-icons large serviceBoxIcon">business</i>
                        <p className="buttonTitle">Commercial Off The Shelf (COTS)</p>
                        <p className="buttonText">part assessment/grading for use in radiation environments</p>
                        <br></br>
                        {/* <a className="waves-effect waves-light btn-large green">More Info</a> */}
                        <Modal id="2" header="Radiation Hardening by Process & Design for ASICs & FPGAs" content="Dramatic increases in sensor resolution in remote-sensing space payloads are causing a processing bottleneck, as downlink bandwidth is not keeping pace. Operators require onboard processing so that satellites send processed information, not just raw data. It is a growing challenge for the roughly 100 remote sensing satellites launched each year, each carrying as many as eight payload instruments. Flash-based field-programmable gate array (FPGA) technology is now being applied to the problem, combining high-speed signal processing with special built-in radiation mitigation techniques to keep systems operational in harsh radiation environments." />
                    </button>
                    <button className="col s4 serviceBox" >
                        <i className="material-icons large serviceBoxIcon">computer</i>
                        <p className="buttonTitle">Technology Computer Aided Design (TCAD)</p>
                        <p className="buttonText">Simulations & Design of Experiments</p>
                        <br></br>
                        {/* <a className="waves-effect waves-light btn-large green">More Info</a> */}
                        <Modal id="1" header="Radiation Hardening by Process & Design for ASICs & FPGAs" content="Dramatic increases in sensor resolution in remote-sensing space payloads are causing a processing bottleneck, as downlink bandwidth is not keeping pace. Operators require onboard processing so that satellites send processed information, not just raw data. It is a growing challenge for the roughly 100 remote sensing satellites launched each year, each carrying as many as eight payload instruments. Flash-based field-programmable gate array (FPGA) technology is now being applied to the problem, combining high-speed signal processing with special built-in radiation mitigation techniques to keep systems operational in harsh radiation environments." />
                    </button>

                </div>
            </div>
            <div className="row serviceItems">
                <div>
                    <button className="col s4 serviceBox2" >
                        <i className="material-icons large">broken_image</i>
                        <p className="buttonTitle">Electronic Design Automation (EDA) Flows</p>
                        <p className="buttonText">some other text</p>
                        <br></br>
                        <a className="waves-effect waves-light btn-large green">More Info</a>
                    </button>
                    <button className="col s4 serviceBox" >
                        <i className="material-icons large">chrome_reader_mode</i>
                        <p className="buttonTitle">Radiation Hardened Process Design Kit (PDK)</p>
                        <p className="buttonText">Development and Assessment</p>
                        <br></br>
                        <a className="waves-effect waves-light btn-large green">More Info</a>
                    </button>
                    <button className="col s4 serviceBox2" >
                        <i className="material-icons large">satellite</i>
                        <p className="buttonTitle">Satellite Survivability Calculations</p>
                        <p className="buttonText"></p>
                        <br></br>
                        <a className="waves-effect waves-light btn-large green">More Info</a>
                    </button>

                </div>
            </div>
            <div className="row serviceItems">
                <div>
                    <button className="col s4 serviceBox">
                        <i className="material-icons large">scanner</i>
                        <p className="buttonTitle">Radiation Induced Upset Mitigation</p>
                        <p className="buttonText">& Soft Error Analysis</p>
                        <br></br>
                        <a className="waves-effect waves-light btn-large green">More Info</a>
                    </button>
                    <button className="col s4 serviceBox2">
                        <i className="material-icons large">screen_rotation</i>
                        <p className="buttonTitle">Radiation Testing</p>
                        <p className="buttonText">& Component Analyses</p>
                        <br></br>
                        <a className="waves-effect waves-light btn-large green">More Info</a>
                    </button>
                    <button className="col s4 serviceBox">
                        <i className="material-icons large">sms</i>
                        <p className="buttonTitle">Technology Computer Aided Design (TCAD)</p>
                        <p className="buttonText">Simulations & Design of Experiments</p>
                        <br></br>
                        <a className="waves-effect waves-light btn-large green">More Info</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Service;