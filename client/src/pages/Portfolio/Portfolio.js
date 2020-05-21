import React, { Component } from "react";
import Modal from "../../components/Modal"
import Project from "./projectList.json";
import "./style.css";

// class Portfolio extends Component {
//     state = {
//         projList: 0,
//     }
//     componentDidMount() {
//         window.scrollTo(0, 0);
//     }

//     modalProps0 = {
//         triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[0].imageLocation}`} alt="portfolio_image" />
//     };
//     modalContent0 = (
//         <React.Fragment>
//             <h3 className="projectImageTitle">{Project[0].project}</h3>
//             <div className="projectImageContainer">
//                 <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[0].imageLocation}`} alt="portfolio_image" />
//             </div>
//             <p><div className="modalBold">Description: </div> {Project[0].overview}</p>
//             <p><div className="modalBold">Technologies: </div> {Project[0].tech}</p>
//             <p><div className="modalBold">Deployed: </div><a href={Project[0].deployLink} target="_blank" rel="noopener noreferrer">{Project[0].deployLink}</a> </p>
//             <p><div className="modalBold">Github: </div><a href={Project[0].githubLink} target="_blank" rel="noopener noreferrer">{Project[0].githubLink}</a></p>
//         </React.Fragment>
//     );
//     modalProps1 = {
//         triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[1].imageLocation}`} alt="portfolio_image" />
//     };
//     modalContent1 = (
//         <React.Fragment>
//             <h3 className="projectImageTitle">{Project[1].project}</h3>
//             <div className="projectImageContainer">
//                 <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[1].imageLocation}`} alt="portfolio_image" />
//             </div>
//             <p><div className="modalBold">Description: </div> {Project[1].overview}</p>
//             <p><div className="modalBold">Technologies: </div> {Project[1].tech}</p>
//             <p><div className="modalBold">Deployed: </div><a href={Project[1].deployLink} target="_blank" rel="noopener noreferrer">{Project[1].deployLink}</a> </p>
//             <p><div className="modalBold">Github: </div><a href={Project[1].githubLink} target="_blank" rel="noopener noreferrer">{Project[1].githubLink}</a></p>
//         </React.Fragment>
//     );
//     modalProps2 = {
//         triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[2].imageLocation}`} alt="portfolio_image" />
//     };
//     modalContent2 = (
//         <React.Fragment>
//             <h3 className="projectImageTitle">{Project[2].project}</h3>
//             <div className="projectImageContainer">
//                 <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[2].imageLocation}`} alt="portfolio_image" />
//             </div>
//             <p><div className="modalBold">Description: </div> {Project[2].overview}</p>
//             <p><div className="modalBold">Technologies: </div> {Project[2].tech}</p>
//             <p><div className="modalBold">Deployed: </div><a href={Project[2].deployLink} target="_blank" rel="noopener noreferrer">{Project[2].deployLink}</a> </p>
//             <p><div className="modalBold">Github: </div><a href={Project[2].githubLink} target="_blank" rel="noopener noreferrer">{Project[2].githubLink}</a></p>
//         </React.Fragment>
//     );
//     modalProps3 = {
//         triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[3].imageLocation}`} alt="portfolio_image" />
//     };
//     modalContent3 = (
//         <React.Fragment>
//             <h3 className="projectImageTitle">{Project[3].project}</h3>
//             <div className="projectImageContainer">
//                 <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[3].imageLocation}`} alt="portfolio_image" />
//             </div>
//             <p><div className="modalBold">Description: </div> {Project[3].overview}</p>
//             <p><div className="modalBold">Technologies: </div> {Project[3].tech}</p>
//             <p><div className="modalBold">Deployed: </div><a href={Project[3].deployLink} target="_blank" rel="noopener noreferrer">{Project[3].deployLink}</a> </p>
//             <p><div className="modalBold">Github: </div><a href={Project[3].githubLink} target="_blank" rel="noopener noreferrer">{Project[3].githubLink}</a></p>
//         </React.Fragment>
//     );
//     modalProps4 = {
//         triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[4].imageLocation}`} alt="portfolio_image" />
//     };
//     modalContent4 = (
//         <React.Fragment>
//             <h3 className="projectImageTitle">{Project[4].project}</h3>
//             <div className="projectImageContainer">
//                 <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[4].imageLocation}`} alt="portfolio_image" />
//             </div>
//             <p><div className="modalBold">Description: </div> {Project[4].overview}</p>
//             <p><div className="modalBold">Technologies: </div> {Project[4].tech}</p>
//             <p><div className="modalBold">Deployed: </div><a href={Project[4].deployLink} target="_blank" rel="noopener noreferrer">{Project[4].deployLink}</a> </p>
//             <p><div className="modalBold">Github: </div><a href={Project[4].githubLink} target="_blank" rel="noopener noreferrer">{Project[4].githubLink}</a></p>
//         </React.Fragment>
//     );
//     modalProps5 = {
//         triggerText: <img className="projectImage" src={process.env.PUBLIC_URL + `${Project[5].imageLocation}`} alt="portfolio_image" />
//     };
//     modalContent5 = (
//         <React.Fragment>
//             <h3 className="projectImageTitle">{Project[5].project}</h3>
//             <div className="projectImageContainer">
//                 <img className="projectImage_modal" src={process.env.PUBLIC_URL + `${Project[5].imageLocation}`} alt="portfolio_image" />
//             </div>
//             <p><div className="modalBold">Description: </div> {Project[5].overview}</p>
//             <p><div className="modalBold">Technologies: </div> {Project[5].tech}</p>
//             <p><div className="modalBold">Deployed: </div><a href={Project[5].deployLink} target="_blank" rel="noopener noreferrer">{Project[5].deployLink}</a> </p>
//             <p><div className="modalBold">Github: </div><a href={Project[5].githubLink} target="_blank" rel="noopener noreferrer">{Project[5].githubLink}</a></p>
//         </React.Fragment>
//     );

//     render() {
//         return (
//             <div className="portfolio">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="portContainer">
//                                 <h1 className="portHeader">Latest Projects.</h1>
//                                 <p className="portText1">{Project[this.state.projList].project}</p>
//                                 <p className="portText2">{Project[this.state.projList].shortoverview}</p>
//                                 {this.state.projList === 0 ? <Modal modalProps={this.modalProps0} modalContent={this.modalContent0} /> : null}
//                                 {this.state.projList === 1 ? <Modal modalProps={this.modalProps1} modalContent={this.modalContent1} /> : null}
//                                 {this.state.projList === 2 ? <Modal modalProps={this.modalProps2} modalContent={this.modalContent2} /> : null}
//                                 {this.state.projList === 3 ? <Modal modalProps={this.modalProps3} modalContent={this.modalContent3} /> : null}
//                                 {this.state.projList === 4 ? <Modal modalProps={this.modalProps4} modalContent={this.modalContent4} /> : null}
//                                 {this.state.projList === 5 ? <Modal modalProps={this.modalProps5} modalContent={this.modalContent5} /> : null}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="row">
//                                 <div className="col-md-4 projectPrev projectControl">
//                                     <a onClick={() => {
//                                         this.setState({ projList: (this.state.projList - 1) % 6 });
//                                     }} >
//                                         <i class="fas fa fa-angle-left"></i>PREV</a>
//                                 </div>
//                                 <div className="col-md-4 projectCenter projectControl">
//                                     <a id="visitLink" href={Project[this.state.projList].deployLink} target="_target">VISIT WEBSITE</a>
//                                 </div>
//                                 <div className="col-md-4 projectNext projectControl ">
//                                     <a id="visitLink" onClick={() => {
//                                         this.setState({ projList: (this.state.projList + 1) % 6 });
//                                     }} >NEXT<i class="fas fa fa-angle-right"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Portfolio;
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
                            <img className="projectImage" src={process.env.PUBLIC_URL + "/images/dani_ss.png"} alt="portfolio_image" />
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