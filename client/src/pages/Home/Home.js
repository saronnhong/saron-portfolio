import React, { Component } from "react";
// import { HashLink as Link } from 'react-router-hash-link';
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";
import Footer from "../../components/Footer";


class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="home ">
                <div className="container">
                    <div className="homeContainer">
                        <h1 className="homeHeader">I create amazing web apps.</h1>
                        <p className="homeText">I am a full-stack web developer based in San Diego with an affinity for brilliant design. I enjoy my work to build creative and functional user experiences. My domain of expertise is in custom designed websites with excellent typography, beautiful layout, and strong information architecture. I always follow best practices of modern web development including responsive design, semantic markup, and equally accessible content. </p>
                        <button type="button" className="btn btn-dark homeBtn">Let’s Collab!</button>
                        <button type="button" className="btn btn-outline-dark homeBtn">View My Resume</button>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>




        );
    }
}

export default Home;