import React, { Component } from "react";
import Modal from "../../components/Modal"
import Project from "./projectList.json";
import "./style.css";


class Portfolio extends Component {
    state = {
        projList: 0,
    }
    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }

    modalProps0 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[0].imageLocation}`} />
    };
    modalContent0 = (
        <React.Fragment>
            <h3 className="projectImageTitle">{Project[0].project}</h3>
            <div className="projectImageContainer">
                <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[0].imageLocation}`} />
            </div>
            <p><div className="modalBold">Description: </div> {Project[0].overview}</p>
            <p><div className="modalBold">Technologies: </div> {Project[0].tech}</p>
            <p><div className="modalBold">Deployed: </div><a href={Project[0].deployLink} target="_blank">{Project[0].deployLink}</a> </p>
            <p><div className="modalBold">Github: </div><a href={Project[0].githubLink} target="_blank">{Project[0].githubLink}</a></p>
        </React.Fragment>
    );
    modalProps1 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[1].imageLocation}`} />
    };
    modalContent1 = (
        <React.Fragment>
            <h3 className="projectImageTitle">{Project[1].project}</h3>
            <div className="projectImageContainer">
                <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[1].imageLocation}`} />
            </div>
            <p><div className="modalBold">Description: </div> {Project[1].overview}</p>
            <p><div className="modalBold">Technologies: </div> {Project[1].tech}</p>
            <p><div className="modalBold">Deployed: </div><a href={Project[1].deployLink} target="_blank">{Project[1].deployLink}</a> </p>
            <p><div className="modalBold">Github: </div><a href={Project[1].githubLink} target="_blank">{Project[1].githubLink}</a></p>
        </React.Fragment>
    );
    modalProps2 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[2].imageLocation}`} />
    };
    modalContent2 = (
        <React.Fragment>
            <h3 className="projectImageTitle">{Project[2].project}</h3>
            <div className="projectImageContainer">
                <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[2].imageLocation}`} />
            </div>
            <p><div className="modalBold">Description: </div> {Project[2].overview}</p>
            <p><div className="modalBold">Technologies: </div> {Project[2].tech}</p>
            <p><div className="modalBold">Deployed: </div><a href={Project[2].deployLink} target="_blank">{Project[2].deployLink}</a> </p>
            <p><div className="modalBold">Github: </div><a href={Project[2].githubLink} target="_blank">{Project[2].githubLink}</a></p>
        </React.Fragment>
    );
    modalProps3 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[3].imageLocation}`} />
    };
    modalContent3 = (
        <React.Fragment>
            <h3 className="projectImageTitle">{Project[3].project}</h3>
            <div className="projectImageContainer">
                <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[3].imageLocation}`} />
            </div>
            <p><div className="modalBold">Description: </div> {Project[3].overview}</p>
            <p><div className="modalBold">Technologies: </div> {Project[3].tech}</p>
            <p><div className="modalBold">Deployed: </div><a href={Project[3].deployLink} target="_blank">{Project[3].deployLink}</a> </p>
            <p><div className="modalBold">Github: </div><a href={Project[3].githubLink} target="_blank">{Project[3].githubLink}</a></p>
        </React.Fragment>
    );
    modalProps4 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[4].imageLocation}`} />
    };
    modalContent4 = (
        <React.Fragment>
            <h3 className="projectImageTitle">{Project[4].project}</h3>
            <div className="projectImageContainer">
                <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[4].imageLocation}`} />
            </div>
            <p><div className="modalBold">Description: </div> {Project[4].overview}</p>
            <p><div className="modalBold">Technologies: </div> {Project[4].tech}</p>
            <p><div className="modalBold">Deployed: </div><a href={Project[4].deployLink} target="_blank">{Project[4].deployLink}</a> </p>
            <p><div className="modalBold">Github: </div><a href={Project[4].githubLink} target="_blank">{Project[4].githubLink}</a></p>
        </React.Fragment>
    );
    modalProps5 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[5].imageLocation}`} />
    };
    modalContent5 = (
        <React.Fragment>
            <h3 className="projectImageTitle">{Project[5].project}</h3>
            <div className="projectImageContainer">
                <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[5].imageLocation}`} />
            </div>
            <p><div className="modalBold">Description: </div> {Project[5].overview}</p>
            <p><div className="modalBold">Technologies: </div> {Project[5].tech}</p>
            <p><div className="modalBold">Deployed: </div><a href={Project[5].deployLink} target="_blank">{Project[5].deployLink}</a> </p>
            <p><div className="modalBold">Github: </div><a href={Project[5].githubLink} target="_blank">{Project[5].githubLink}</a></p>
        </React.Fragment>
    );


    render() {
        return (
            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="portContainer">
                                <h1 className="portHeader">Latest Projects.</h1>
                                <p className="portText1">{Project[this.state.projList].project}</p>
                                <p className="portText2">{Project[this.state.projList].shortoverview}</p>
                                {this.state.projList === 0 ? <Modal modalProps={this.modalProps0} modalContent={this.modalContent0} /> : null}
                                {this.state.projList === 1 ? <Modal modalProps={this.modalProps1} modalContent={this.modalContent1} /> : null}
                                {this.state.projList === 2 ? <Modal modalProps={this.modalProps2} modalContent={this.modalContent2} /> : null}
                                {this.state.projList === 3 ? <Modal modalProps={this.modalProps3} modalContent={this.modalContent3} /> : null}
                                {this.state.projList === 4 ? <Modal modalProps={this.modalProps4} modalContent={this.modalContent4} /> : null}
                                {this.state.projList === 5 ? <Modal modalProps={this.modalProps5} modalContent={this.modalContent5} /> : null}

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 projectPrev projectControl">
                                    <a onClick={() => {
                                        this.setState({ projList: (this.state.projList - 1) % 6 });
                                    }} >
                                        <i class="fas fa fa-angle-left"></i>PREV</a>
                                </div>
                                <div className="col-md-4 projectCenter projectControl">
                                    <a id="visitLink" href={Project[this.state.projList].deployLink} target="_target">VISIT WEBSITE</a>
                                </div>
                                <div className="col-md-4 projectNext projectControl ">
                                    <a id="visitLink" onClick={() => {
                                        this.setState({ projList: (this.state.projList + 1) % 6 });
                                    }} >NEXT<i class="fas fa fa-angle-right"></i></a>
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
