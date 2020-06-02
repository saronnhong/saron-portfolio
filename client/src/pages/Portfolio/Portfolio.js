import React, { Component } from "react";
import "./style.css";
import Carousel from "./../../components/Carousel"

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="project1">
                    <div className="container">
                        <h1 className="portHeader">Latest Projects.</h1>
                        <h1 className="portTitle">DANI</h1>
                        <h5 className="portSubTitle">Developing And Nurturing Interface</h5>
                        <div className="portDescription">Full Stack MERN application that provides children with autism a source of entertainment and learning. Inspired by team mate’s autistic brother who is soothed by various tasked on a phone.</div>
                        <div className="imgContainer">
                            {/* <img className="projectImage" src={process.env.PUBLIC_URL + "/images/dani_ss.png"} alt="portfolio_image" /> */}
                            <div className="carouselContainer">
                                <Carousel></Carousel>
                            </div>

                        </div>
                        <div className="buttonContainer">
                            <a href="https://github.com/saronnhong/dani" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-dark portButton">Github</button>
                            </a>
                            <a href="https://dani-ap.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-dark portButton">Live</button>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="project2">
                    <div className="container">
                        <h1 className="portTitle">Wat2Watch</h1>
                        <h5 className="portSubTitle">A movie recommendation finder</h5>
                        <div className="portDescription">Full Stack application that collects information through user surveys and favorited movies, stores and analyzes it in a MySQL database, and gives the user movie recommendations.</div>
                        <div className="imgContainer">
                            <img className="projectImage" src={process.env.PUBLIC_URL + "/images/wat2watch_ss.jpg"} alt="portfolio_image" />
                        </div>
                        <div className="buttonContainer">
                            <a href="https://github.com/saronnhong/movie_gen" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-dark portButton">Github</button>
                            </a>
                            <a href="https://wat2watch-p2.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-dark portButton">Live</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project3">
                    <div className="container">
                        <h1 className="portTitle">ChowFeed</h1>
                        <h5 className="portSubTitle">A restaurant and recipe finder</h5>
                        <div className="portDescription">Front end web application that provides the user a way to find certain dishes at restaurants and a recipe for the dish at the same time. Used the Food2Fork API and the Yelp Fusion API to query search results for recipes and local restaurants.</div>
                        <div className="imgContainer">
                            <img className="projectImage" src={process.env.PUBLIC_URL + "/images/chowfeed-min.jpg"} alt="portfolio_image" />
                        </div>
                        <div className="buttonContainer">
                            <a href="https://github.com/saronnhong/ChowFeed" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-dark portButton">Github</button>
                            </a>
                            <a href="https://saronnhong.github.io/ChowFeed/" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-outline-dark portButton">Live</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
export default Portfolio;