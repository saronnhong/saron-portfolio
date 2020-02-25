import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper transparent nav-background">
                <div className="container">
                    <a href="/Home" className="brand-logo left">M&A INC.</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;