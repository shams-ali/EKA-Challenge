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
      title: 'EKA Onboarding',
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
        <button onClick={ this.addModal }>Signup</button>
        <button onClick={ this.addModal }>Update Information</button>
      </div>
    );
  }
}

export default Dashboard;
