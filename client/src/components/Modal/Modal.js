import React, { Component } from "react";
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import "./style.css";

class Modal extends Component {
    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: .6,
            dismissible: true,
            startingTop: "4%",
            endingTop: "15%"
        };
        M.Modal.init(this.Modal, options);
    }

    render() {
        return (
            <div className="modalMain">
                <a className="waves-effect modal-trigger btn-large green" data-target={this.props.id}>More Info</a>
                <div ref={Modal => { this.Modal = Modal; }} id={this.props.id} className="modal">
                    <div className="modal-content">
                        <h3>{this.props.header}</h3>
                        <div className="contentText">{this.props.content}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
