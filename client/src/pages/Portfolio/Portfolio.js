import React, { Component } from "react";
import "./style.css";

class Portfolio extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="portContainer">
                            <h1 className="portHeader">Latest Projects.</h1>
                            <p className="portText1">DANI - Developing And Nurturing Interface</p>
                            <p className="portText2">Full Stack MERN application that provides children with autism a source of entertainment and learning.</p>

                            <img className="projectImage" src={process.env.PUBLIC_URL + "/images/dani_ss.png"} />
                        </div>
                        {/* <span className="leftControl projectControl">
                            <i class="fas fa fa-angle-left"></i>PREV
                        </span>
                        <div className="projectControl">VISIT WEBSITE</div>
                        <span className="rightControl projectControl">
                            NEXT<i class="fas fa fa-angle-right"></i>
                        </span> */}
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 projectControl">
                                <i class="fas fa fa-angle-left"></i>PREV
                                </div>
                                <div className="col-md-4 projectCenter projectControl">
                                VISIT WEBSITE
                                </div>
                                <div className="col-md-4 projectNext projectControl">
                                NEXT<i class="fas fa fa-angle-right"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;