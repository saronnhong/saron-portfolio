import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import "./style.css";

class Navbar extends React.Component {
    render() {
        let isActive = this.props.location.pathname;
        console.log(isActive);
        return (
            // <div className="navbar-fixed">
            //     <nav id="navBar" >
            //         <div className="nav-wrapper nav-background white blue-text text-darken-2">
            //             <div className="container">
            //                 <Link smooth to="/home">
            //                     <a href="/Home" className="brand-logo left navBarLogo ">Milanowski & Associates, Inc.</a>
            //                 </Link>
            //                 <ul id="nav-mobile" className="right hide-on-med-and-down">
            //                     <li>
            //                         <Link smooth to="/home">
            //                             <a className={isActive === "/home" ? "activeLink navLinks navActive" : "navLinks navUnActive"}>Home</a>
            //                         </Link>
            //                     </li>
            //                     <li>
            //                         <Link smooth to="/about">
            //                             <a className={isActive === "/about" ? "activeLink navLinks navActive" : "navLinks navUnActive"}>About</a>
            //                         </Link>
            //                     </li>
            //                     <li>
            //                         <Link smooth to="/service">
            //                             <a className={isActive === "/service" ? "activeLink navLinks navActive" : "navLinks navUnActive"}>Services</a>
            //                         </Link>
            //                     </li>
            //                     <li>
            //                         <Link smooth to="/contact">
            //                             <a id="navContact" className={isActive === "/contact" ? "activeLink navActiveContact navContactActive" : "contactLink navContactUnActive"}>Contact</a>
            //                         </Link>
            //                     </li>

            //                 </ul>
            //             </div>
            //         </div>
            //     </nav>
            // </div>




            // <nav >
            //     <div className="nav-wrapper white">
            //         <div className="container row">
            //             <div className="col s7">
            //             <Link smooth to="/home">
            //                 <a href="/Home" className="brand-logo left">Milanowski & Associates, Inc.</a>
            //             </Link>
            //             </div>
            //             <div className="col s5">
            //             <ul id="nav-mobile" className="hide-on-med-and-down">
            //                 <Link smooth to="/home">
            //                     <li className={isActive === "/home" ? "active" : "navLinks"}>
            //                         <a>Home</a>
            //                     </li>
            //                 </Link>
            //                 <Link smooth to="/about">
            //                     <li className={isActive === "/about" ? "active" : "navLinks"}>
            //                         <a>About</a>
            //                     </li>
            //                 </Link>
            //                 <Link smooth to="/service">
            //                     <li className={isActive === "/service" ? "active" : "navLinks"}>
            //                         <a >Services</a>
            //                     </li>
            //                 </Link>
            //                 <Link smooth to="/contact">
            //                     <li className={isActive === "/contact" ? "active" : "navLinks"}>
            //                         <a id="navContact" className={isActive === "/contact" ? "active" : "contactLink navContactUnActive"}>Contact</a>
            //                     </li>
            //                 </Link>
            //             </ul>
            //             </div>


            //         </div>

            //     </div>
            // </nav >

            
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navClass">
                <div className="container navClass">
                    <a href="/home" className="navbar-nav mr-auto navBarLogo">Milanowski & Associates, Inc.</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="my-2 my-lg-0">
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav">
                                <Link smooth to="/home">
                                    <li className={isActive === "/home" ? "active nav-item" : "nav-item"}>
                                        <a className="nav-link">Home</a>
                                    </li>
                                </Link>
                                <Link smooth to="/about">
                                    <li className={isActive === "/about" ? "active nav-item" : "nav-item"}>
                                        <a className="nav-link">About</a>
                                    </li>
                                </Link>
                                <Link smooth to="/service">
                                    <li className={isActive === "/service" ? "active nav-item" : "nav-item"}>
                                        <a className="nav-link">Services</a>
                                    </li>
                                </Link>
                                <Link smooth to="/contact">
                                    <li className={isActive === "/contact" ? "active nav-item" : "nav-item"}>
                                        <a className="nav-link" id="navContact">Contact</a>
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