import React from "react";
import "./style.css";

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
            <div className="row">
                <div className="">
                    <button className="col s4 serviceBox" >
                        <i class="material-icons large">add_to_queue</i>
                        <p className="buttonTitle">ONBOARD PROCESSING</p>
                        <p className="buttonText">& Storage System Design</p>
                        <br></br>
                        <a class="waves-effect waves-light btn-large green">More Info</a>
                    </button>
                    <button className="col s4 serviceBox2" >
                        <i class="material-icons large">apps</i>
                        <p className="buttonTitle">ONBOARD PROCESSING</p>
                        <p className="buttonText">& Storage System Design</p>
                        <br></br>
                        <a class="waves-effect waves-light btn-large green">More Info</a>
                    </button>
                    <button className="col s4 serviceBox" >
                        <i class="material-icons large">av_timer</i>
                        <p className="buttonTitle">ONBOARD PROCESSING</p>
                        <p className="buttonText">& Storage System Design</p>
                        <br></br>
                        <a class="waves-effect waves-light btn-large green">More Info</a>
                        
                    </button>
                    
                </div>
            </div>

        </div>
    );
}

export default Service;