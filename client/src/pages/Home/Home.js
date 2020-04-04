import React, { Component } from "react";
// import { HashLink as Link } from 'react-router-hash-link';
import { HashLink as Link } from 'react-router-hash-link';
import "./style.css";
import Footer from "../../components/Footer";


class Home extends Component {

    render() {
        return (
            <div>
                <div className="home">
                    <div className="homeTop">
                        <div className="container">
                            <div className="row bannerContainer">
                                <h1 className="homeBanner">Survivable Space Systems</h1>
                                <p className="homeBannerText">Engineering Services and Technology Development</p>
                            </div>
                            <Link to="/contact">
                                <button type="button" className="btn btn-dark contactUsBtn">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                    <div className="homeBottom">
                        <div className="container">
                            <div className="">
                                <h1 className="homeTitle">Milanowski. Engineering the Latest Radiation Hardened Technologies to Support Our Customers’ Space Missions.</h1>
                                <p className="homeText">For more than eleven years Milanowski & Associates, Inc. has been collaborating with Government and Commercial entities to ensure the successful development and production of the latest radiation hardened technologies. With courageous entrepreneurial rigor and unwavering commitment, we advance the boundaries of science and engineering. We strive to make a difference in the world. Contact us today for a consultation.</p>
                            </div>
                        </div>
                        {/* <nav className="sticky-bottom">
                            <a>© 2020 Milanowski & Associates, Inc. All Rights Reserved.</a>
                        </nav> */}
                    </div>
                    <Footer />
                </div>
                
            </div>


        );
    }
}

export default Home;