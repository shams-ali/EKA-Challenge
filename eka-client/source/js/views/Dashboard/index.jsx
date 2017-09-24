import React, { Component } from 'react';
import { modal } from 'react-redux-modal'; // The modal emitter
import ModalContainer from 'components/Global/ModalContainer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.addModal = this.addModal.bind(this);
  }

  addModal() {
    modal.add(ModalContainer, {
      title: 'This is my modal',
      size: 'large',
      closeOnOutsideClick: false,
      hideTitleBar: false,
      hideCloseButton: false,
    });
  }

  render() {
    return (
      <div className='Dashboard'>
        <h1>EKA Solutions</h1>
        <p>
          This is a generic landing page
        </p>
        <hr />
        <button onClick={ this.addModal }>Add modal</button>
      </div>
    );
  }
}

export default Dashboard;
