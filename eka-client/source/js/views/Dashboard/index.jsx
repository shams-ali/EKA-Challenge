import React, { Component } from 'react';
import { modal } from 'react-redux-modal'; // The modal emitter
import ModalContainer from 'components/Global/ModalContainer';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.addModal = this.addModal.bind(this);
  }

  addModal(type) {
    modal.add(ModalContainer, {
      title: 'EKA Onboarding',
      size: 'medium',
      closeOnOutsideClick: false,
      hideTitleBar: false,
      hideCloseButton: false,
      type,
    });
  }

  render() {
    return (
      <div className='Dashboard'>
        <h1>EKA Solutions</h1>
        <h2>A SMARTER FREIGHT PLATFORM</h2>
        <p>
        Brokers and Shippers deserve the best tools to excel. EKA on-demand end-to-end Transportation Management System (TMS) Cloud offers powerful tracking, data, and automation to help grow your business, increase your margins, and add value for your customers.
        </p>
        <hr />
        <button onClick={ () => this.addModal('signup') }>Sign Up</button>
        <button onClick={ () => this.addModal('update') }>Update Information</button>
      </div>
    );
  }
}

export default Dashboard;
