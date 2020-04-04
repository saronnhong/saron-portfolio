import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import "./style.css";

class Navbar extends React.Component {
    render() {
        let isActive = this.props.location.pathname;
        console.log(isActive);
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top navClass">
                <div className="container navClass">
                    
                        <a href="home" className="navbar-nav mr-auto navBarLogo">Milanowski & Associates, Inc.</a>
                    
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
                                <Link smooth to="/service">
                                    <li className={isActive === "/service" ? "active nav-item" : "nav-item"}>
                                        <div href="/service" id="navService" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Services</div>
                                    </li>
                                </Link>
                                <Link smooth to="/contact">
                                    <li className={isActive === "/contact" ? "active nav-item" : "nav-item"}>
                                        <div href="/contact" id="navContact" className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</div>
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