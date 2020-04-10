import React, { Component } from 'react';
import "./style.css";

// import React, { Component } from 'react';
class ModalTrigger extends Component {
  render() {
    return (
      <div
        ref={this.props.buttonRef}
        onClick={this.props.showModal}
        className="modal-button"
      >
        {this.props.triggerText}
      </div>
    );
  }
}

export default ModalTrigger;
