import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import MaterialUIForm from 'components/Global/MaterialUIForm/index.jsx';
import WizardForm from 'components/Global/WizardForm/WizardForm.jsx';


class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.removeThisModal = this.removeThisModal.bind(this);
    console.log('## MODAL DATA AND PROPS:', this.props);
  }

  removeThisModal() {
    const { removeModal } = this.props;

    removeModal();
  }

  render() {
    return (
      <div>
        <p>this is my modal</p>
        <WizardForm />
        <button
          type='button'
          onClick={ this.removeThisModal }
        >
          close this modal
        </button>
      </div>
    );
  }
}

ModalContainer.propTypes = {
  removeModal: PropTypes.func,
};

export default ModalContainer;
