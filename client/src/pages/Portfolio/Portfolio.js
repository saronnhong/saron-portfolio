import React, { Component } from "react";
import Modal from "../../components/Modal"
import Project from "./projectList.json";
import "./style.css";





var projectList = [
    {
        "id": 0,
        "project": "DANI (Developing And Nurturing Interface)",
        "deployLink": "https://dani-ap.herokuapp.com",
        "imageLocation": "/images/dani_ss.png",
        "githubLink": "https://github.com/saronnhong/dani",
        "shortoverview": "Full Stack MERN application that provides children with autism a source of entertainment and learning.",
        "overview": "Full Stack MERN application that provides children with autism a source of entertainment and learning. Inspired by team mate’s autistic brother who is soothed by various tasked on a phone.Designed front end layout and created reusable Menu and Sound components that allowed for easy construction of Animal, Relaxation, and Nature Sounds sections. Created a simplified Spelling game that gradually grows more difficult as the user progress.",
        "tech1": "JS, React, React Canvas Draw, React Player, Node/Express Server, MongoDB/Mongoose, Robo 3T, Reddit API, Photo Sphere Viewer. (Test Account => Email: test@test.com, Password: test123)"
    },
    {
        "id": 1,
        "project": "Wat2Watch",
        "deployLink": "https://wat2watch-p2.herokuapp.com/",
        "imageLocation": "/images/satellite-1030779_1920_small-min.jpg",
        "githubLink": "https://github.com/saronnhong/movie_gen",
        "shortoverview": "Application that finds new movie recommendations based on user’s likes and interests.",
        "overview": "Application that finds new movie recommendations based on user’s likes and interests. Full Stack application that collects information through user surveys and favorited movies, stores and analyzes it in a MySQL database, and gives the user movie recommendations. Used Unirest to create requests to The Movie Database API on the backend to populate our search queries and keep API keys secure. Manipulated data stored in MySQL database to form algorithm for recommended movies for user.",
        "tech2": "JS, NodeJS, MySQL, The Movie Database API, Handlebars, Morgan, Passport, Sequelize, Unirest"
    }
]

class Portfolio extends Component {
    state = {
        projList: 0,
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    modalProps1 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[this.state.projList].imageLocation}`} />
    };
    modalContent1 = (
        <React.Fragment>
            <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[this.state.projList].imageLocation}`} />
            <p>{Project[this.state.projList].overview}</p>
        </React.Fragment>
    );
    modalProps2 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[1].imageLocation}`} />
    };
    modalContent2 = (
        <React.Fragment>
            <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[1].imageLocation}`} />
            <p>{Project[1].overview}</p>
        </React.Fragment>
    );
    modalProps3 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[2].imageLocation}`} />
    };
    modalContent3 = (
        <React.Fragment>
            <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[2].imageLocation}`} />
            <p>{Project[2].overview}</p>
        </React.Fragment>
    );
    modalProps4 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[3].imageLocation}`} />
    };
    modalContent4 = (
        <React.Fragment>
            <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[3].imageLocation}`} />
            <p>{Project[3].overview}</p>
        </React.Fragment>
    );
    modalProps5 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[4].imageLocation}`} />
    };
    modalContent5 = (
        <React.Fragment>
            <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[4].imageLocation}`} />
            <p>{Project[4].overview}</p>
        </React.Fragment>
    );
    modalProps6 = {
        triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[5].imageLocation}`} />
    };
    modalContent6 = (
        <React.Fragment>
            <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[5].imageLocation}`} />
            <p>{Project[5].overview}</p>
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
                                {this.state.projList === 0 ? <Modal modalProps={this.modalProps1} modalContent={this.modalContent1} /> : null}
                                {this.state.projList === 1 ? <Modal modalProps={this.modalProps2} modalContent={this.modalContent2} /> : null}
                                {this.state.projList === 2 ? <Modal modalProps={this.modalProps3} modalContent={this.modalContent3} /> : null}
                                {this.state.projList === 3 ? <Modal modalProps={this.modalProps4} modalContent={this.modalContent4} /> : null}
                                {this.state.projList === 4 ? <Modal modalProps={this.modalProps5} modalContent={this.modalContent5} /> : null}
                                {this.state.projList === 5 ? <Modal modalProps={this.modalProps6} modalContent={this.modalContent6} /> : null}

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 projectControl">
                                    <a onClick={() => {
                                        this.setState({ projList: (this.state.projList - 1) % 6 });
                                    }} >
                                        <i class="fas fa fa-angle-left"></i>PREV</a>
                                </div>
                                <div className="col-md-4 projectCenter projectControl">
                                    <a href={Project[this.state.projList].deployLink} target="_target">VISIT WEBSITE</a>
                                </div>
                                <div className="col-md-4 projectNext projectControl">
                                    <a onClick={() => {
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
