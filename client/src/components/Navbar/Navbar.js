import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import "./style.css";

class Navbar extends React.Component {
    render() {
        let isActive = this.props.location.pathname;
        console.log(isActive);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navClass">
                <div className="container navClass">
                    <div href="/home" className="navbar-nav mr-auto navBarLogo">Milanowski & Associates, Inc.</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="my-2 my-lg-0">
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav">
                                <Link smooth to="/home">
                                    <li className={isActive === "/home" ? "active nav-item" : "nav-item"}>
                                        <a href="/home" className="nav-link">Home</a>
                                    </li>
                                </Link>
                                <Link smooth to="/about">
                                    <li className={isActive === "/about" ? "active nav-item" : "nav-item"}>
                                        <a href="/about" className="nav-link">About</a>
                                    </li>
                                </Link>
                                <Link smooth to="/service">
                                    <li className={isActive === "/service" ? "active nav-item" : "nav-item"}>
                                        <a href="/service" className="nav-link">Services</a>
                                    </li>
                                </Link>
                                <Link smooth to="/contact">
                                    <li className={isActive === "/contact" ? "active nav-item" : "nav-item"}>
                                        <a href="/contact" className="nav-link" id="navContact">Contact</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}

export default withRouter(Navbar);