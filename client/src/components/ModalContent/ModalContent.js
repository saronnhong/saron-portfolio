import React, { Component } from 'react';
// import ModalTrigger from '../ModalTrigger';
import ReactDOM from 'react-dom';
import "./style.css";

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import FocusTrap from 'focus-trap-react';
// import focusTrap from 'focus-trap';
export class ModalContent extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
          onClick={this.props.onClickOutside}
          onKeyDown={this.props.onKeyDown}
        >
          <div className="modal-area" ref={this.props.modalRef}>
            <div
              ref={this.props.buttonRef}
              aria-label="Close Modal"
              
              className="_modal-close"
              onClick={this.props.closeModal}
            >
              <span id="close-modal" className="_hide-visual">
                Close
              </span>x
            </div>
            <div className="modal-body">{this.props.content}</div>
          </div>
        </aside>
        </div>,
      document.body
    );
  }
}

export default ModalContent;
