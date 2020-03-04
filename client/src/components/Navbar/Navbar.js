import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navBar">
            <div className="nav-wrapper transparent grey darken-4 nav-background">
                <div className="container">
                    <a href="/Home" className="brand-logo left">M&A INC.</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;