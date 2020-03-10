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
                                        <a className={isActive === "/home" ? "activeLink navLinks navActive" : "navLinks navUnActive"}>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="/about">
                                        <a className={isActive === "/about" ? "activeLink navLinks navActive" : "navLinks navUnActive"}>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="/service">
                                        <a className={isActive === "/service" ? "activeLink navLinks navActive" : "navLinks navUnActive"}>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="/contact">
                                        <a id="navContact" className={isActive === "/contact" ? "activeLink navActiveContact navContactActive" : "contactLink navContactUnActive"}>Contact</a>
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