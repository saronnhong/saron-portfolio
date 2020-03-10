import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import "./style.css";

class Navbar extends React.Component {
    render() {
        let isActive = this.props.location.pathname;
        return (
            <div className="navbar-fixed">
                <nav id="navBar" >
                    <div className="nav-wrapper nav-background">
                        <div className="container">
                            <Link smooth to="/home">
                                <a href="/Home" className="brand-logo left">M&A INC.<i class="large material-icons whiteIcon">wifi_tethering</i></a>
                            </Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <Link smooth to="/home">
                                        <a className={isActive === "/home" ? "activeLink navLinks" : "navLinks"}>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="/about">
                                        <a className={isActive === "/about" ? "activeLink navLinks" : "navLinks"}>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="/service">
                                        <a className={isActive === "/service" ? "activeLink navLinks" : "navLinks"}>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="/contact">
                                        <a className={isActive === "/contact" ? "activeLink navActiveContact" : "contactLink"}>Contact</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Navbar);