import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import MaterialUIForm from 'components/Global/MaterialUIForm/index.jsx';
import WizardForm from 'components/Global/WizardForm/WizardForm.jsx';


class ModalContainer extends Component {
  constructor(props) {
    super(props);

    this.removeThisModal = this.removeThisModal.bind(this);
  }

  removeThisModal() {
    const { removeModal } = this.props;
    removeModal();
  }

  render() {
    const { removeModal, type } = this.props;

    return (
      <div>
        <WizardForm removeModal={ removeModal } type={ type } />
      </div>
    );
  }
}

ModalContainer.propTypes = {
  removeModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default ModalContainer;
