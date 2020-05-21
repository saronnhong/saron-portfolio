import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import "./style.css";

class Navbar extends React.Component {
    render() {
        let isActive = this.props.location.pathname;
        console.log(window.innerWidth);
        return (
            <div className="navbar navbar-expand-sm fixed-top navbar-light navClass">
                <div className="container navClass">
                    {isActive === "/contact" && window.innerWidth > 600 ? <img className="navImg" src={process.env.PUBLIC_URL + 'images/saron-logo-white.svg'} alt="logo" /> : <img className="navImg" src={process.env.PUBLIC_URL + 'images/saron-logo2.svg'} alt="logo" />}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="my-2 my-lg-0">
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav">
                                <Link smooth to="/home">
                                    <li className={isActive === "/home" ? "active nav-item" : "nav-item"}>
                                        <div href="/home" id="navHome" className={isActive === "/contact" ? "navLinkContactPage" : "nav-link"} data-toggle="collapse" data-target=".navbar-collapse.show">Home</div>
                                    </li>
                                </Link>
                                <Link smooth to="/portfolio">
                                    <li className={isActive === "/portfolio" ? "active nav-item" : "nav-item"}>
                                        <div href="/portfolio" id="navService" className={isActive === "/contact" ? "navLinkContactPage " : "nav-link"} data-toggle="collapse" data-target=".navbar-collapse.show">Portfolio</div>
                                    </li>
                                </Link>
                                <Link smooth to="/contact">
                                    <li className={isActive === "/contact" ? "active nav-item" : "nav-item"}>
                                        <div href="/contact" id="navContact" className={isActive === "/contact" ? "navLinkContactPage " : "nav-link"} data-toggle="collapse" data-target=".navbar-collapse.show">Get In Touch</div>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Navbar);