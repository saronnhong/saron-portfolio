import React, { Component } from "react";
import "./style.css";
// import M from "materialize-css";


class Home extends Component {
    // componentDidMount() {
    //     M.Parallax.init(this.Parallax1);
    //     M.Parallax.init(this.Parallax2);
    // }
    render() {

        return (
            <div className="home">
                <div className="background-overlay container ">
                    <div className="text-container scrim">
                        <h2>SURVIVABLE SPACE SYSTEMS</h2>
                        <h5>Engineering Services and Technology Development</h5>
                    </div>
                </div>

            </div>

            //some parallax test code
            // <div>
            //     <div ref={Parallax => {
            //         this.Parallax1 = Parallax;
            //     }} className="parallax-container">
            //         <div className="parallax imgEdit"><img src="sunrise-1756274_1280.jpg"/></div>
            //     </div>
            //     <div className="section white">
            //         <div className="row container">
            //             <h1 className="tracking-in-expand">SURVIVABLE SPACE SYSTEMS</h1>
            //             <h5>Engineering Services and Technology Development</h5>
            //         </div>
            //     </div>
            //     <div ref={Parallax => {
            //         this.Parallax2 = Parallax;
            //     }} className="parallax-container">
            //         <div className="parallax imgEdit"><img src="sunrise-1756274_1280.jpg" /></div>
            //     </div>
            // </div>


        );
    }
}

export default Home;