import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import "./style.css";

class Navbar extends React.Component {
    render() {
        let isActive = this.props.location.pathname;
        console.log(isActive);
        return (
            <div className="navbar navbar-expand-md fixed-top navClass">
                <div className="container navClass">
                    {/* <a href="/" className="mr-auto navBarLogo">SaronNhong</a> */}
                    <img className="navImg" src={process.env.PUBLIC_URL + 'images/saron-logo2.svg'} />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="my-2 my-lg-0">
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav">
                                <Link smooth to="/home">
                                    <li className={isActive === "/home" ? "active nav-item" : "nav-item"}>
                                        <div href="/home" id="navHome" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Home</div>
                                    </li>
                                </Link>
                                <Link smooth to="/about">
                                    <li className={isActive === "/about" ? "active nav-item" : "nav-item"}>
                                        <div href="/about" id="navAbout" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">About</div>
                                    </li>
                                </Link>
                                <Link smooth to="/portfolio">
                                    <li className={isActive === "/portfolio" ? "active nav-item" : "nav-item"}>
                                        <div href="/portfolio" id="navService" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Portfolio</div>
                                    </li>
                                </Link>
                                <Link smooth to="/contact">
                                    <li className={isActive === "/contact" ? "active nav-item" : "nav-item"}>
                                        <div href="/contact" id="navContact" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Get In Touch</div>
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