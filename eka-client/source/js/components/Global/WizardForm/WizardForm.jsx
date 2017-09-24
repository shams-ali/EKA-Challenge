import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import client from 'components/Global/feathers';
import WizardFormSignUpPage from './WizardFormSignUpPage';
import WizardFormSignInPage from './WizardFormSignInPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };

    this.nextPage = this.nextPage.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  async nextPage({ street, city, state, zip, firstName, lastName, phone }) {
    const { page } = this.state;
    const { history, removeModal } = this.props;
    try {
      const { id } = client.get('user');
      await client.service('users').patch(id, { street, city, state, zip, firstName, lastName, phone });
      if (page === 2) {
        this.setState({ page: this.state.page + 1 });
      } else {
        removeModal();
        history.push('/about');
      }
    } catch (err) {
      console.error(err);
    }
  }

  async signUp({ username, password, email }) {
    const { page } = this.state;
    try {
      await client.service('users').create({ email, password, username });
      const { accessToken } = await client.authenticate({
        strategy: 'local',
        email,
        password,
        username,
      });
      const { userId } = await client.passport.verifyJWT(accessToken);
      const { user } = await client.service('users').get(userId);

      client.set('user', user);
      this.setState({ page: page + 1 });
    } catch (err) {
      console.error(err);
    }
  }

  async signIn({ username, password, email }) {
    const { page } = this.state;
    try {
      const { accessToken } = await client.authenticate({
        strategy: 'local',
        email,
        password,
        username,
      });
      const { userId } = await client.passport.verifyJWT(accessToken);
      const user = await client.service('users').get(userId);
      client.set('user', user);

      this.setState({ page: page + 1 });
    } catch (err) {
      console.error(err);
    }
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page } = this.state;
    const { type } = this.props;
    return (
      <div>
        {page === 1 && type === 'signup' && <WizardFormSignUpPage onSubmit={ this.signUp } />}
        {page === 1 && type === 'update' && <WizardFormSignInPage onSubmit={ this.signIn } />}
        {page === 2 &&
          <WizardFormSecondPage
            onSubmit={ this.nextPage }
          />}
        {page === 3 &&
          <WizardFormThirdPage
            previousPage={ this.previousPage }
            onSubmit={ this.nextPage }
          />}
      </div>
    );
  }
}

WizardForm.propTypes = {
  type: PropTypes.string.isRequired,
  removeModal: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default withRouter(WizardForm);
