import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import "./style.css";

class Footer extends React.Component {
    render() {
        return (
            <nav className="sticky-bottom">
                <a>© 2020 Milanowski & Associates, Inc. All Rights Reserved.</a>
            </nav>
        );
    }
}

export default withRouter(Footer);