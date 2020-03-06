import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div className="navbar-fixed">
            <nav id="navBar" className={props.backgroundColor}>
                <div className="nav-wrapper nav-background">
                    <div className="container">
                        <a href="/Home" className="brand-logo left">M&A INC.<i class="large material-icons whiteIcon">wifi_tethering</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/service">Services</a></li>
                            <li><a id="contactLink" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;