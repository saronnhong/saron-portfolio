import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import "./style.css";

function Footer() {
    
        return (
            <nav className="sticky-bottom">
                <a>© 2020 Milanowski & Associates, Inc. All Rights Reserved.</a>
            </nav>
        );
    
}

export default Footer;