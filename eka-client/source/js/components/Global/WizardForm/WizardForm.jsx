import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import client from 'components/Global/feathers';
import WizardFormSignUpPage from 'components/Global/WizardForm/WizardFormSignUpPage';
import WizardFormSignInPage from 'components/Global/WizardForm/WizardFormSignInPage';
import WizardFormSecondPage from 'components/Global/WizardForm/WizardFormSecondPage';
import WizardFormThirdPage from 'components/Global/WizardForm/WizardFormThirdPage';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      serverError: null,
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
        this.setState({ serverError: null, page: this.state.page + 1 });
      } else {
        removeModal();
        history.push('/success');
      }
    } catch (serverError) {
      console.error(serverError);
      this.setState({ serverError });
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
      const user = await client.service('users').get(userId);
      client.set('user', user);
      this.setState({ error: null, page: page + 1 });
    } catch (serverError) {
      console.error(serverError);
      this.setState({ serverError });
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

      this.setState({ serverError: null, page: page + 1 });
    } catch (serverError) {
      console.error(serverError);
      this.setState({ serverError });
    }
  }

  previousPage() {
    this.setState({ serverError: null, page: this.state.page - 1 });
  }

  render() {
    const { page, serverError } = this.state;
    const { type } = this.props;
    return (
      <div>
        {page === 1 && type === 'signup' && <WizardFormSignUpPage onSubmit={ this.signUp } serverError={ serverError } />}
        {page === 1 && type === 'update' && <WizardFormSignInPage onSubmit={ this.signIn } serverError={ serverError } />}
        {page === 2 &&
          <WizardFormSecondPage
            onSubmit={ this.nextPage }
            serverError={ serverError }
          />}
        {page === 3 &&
          <WizardFormThirdPage
            previousPage={ this.previousPage }
            onSubmit={ this.nextPage }
            serverError={ serverError }
          />}
        { serverError && <div>{serverError.message}</div> }
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
