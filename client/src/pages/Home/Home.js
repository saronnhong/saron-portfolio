import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";
import Pdf from './Saron-Nhong-Resume.pdf'


class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="home ">
                <div className="container">
                    <div className="homeContainer">
                        <h1 className="homeHeader">I build amazing web apps.</h1>
                        <p className="homeText">Hi, my name is Saron. I am a full-stack web developer based in San Diego with an affinity for brilliant design. I enjoy my work to build creative and functional user experiences. My domain of expertise is in custom designed web applications with the latest technology stacks which includes ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, etc. I am always willing to discuss new projects and am able to to take a client's idea from paper to a fully functional application. If you can imagine it, I can build it!</p>
                        <Link to="/contact">
                            <button type="button" className="btn btn-dark homeBtn colabBtn hvr-sweep-to-right">Let’s Collab!</button>
                        </Link>
                        <a href={Pdf} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-outline-dark homeBtn">View My Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;