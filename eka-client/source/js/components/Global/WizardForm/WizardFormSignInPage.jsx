import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import validate from 'components/Global/FormHelpers/validate';
import renderTextField from 'components/Global/FormHelpers/renderTextField.jsx';

const WizardFormSignInPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field
          name='username'
          type='text'
          component={ renderTextField }
          label='Username'
        />
      </div>
      <div>
        <Field
          name='email'
          type='text'
          component={ renderTextField }
          label='Email'
        />
      </div>
      <div>
        <Field
          name='password'
          type='password'
          component={ renderTextField }
          label='Password'
        />
      </div>
      <div>
        <button type='submit' className='next'>
          Login
        </button>
      </div>
    </form>
  );
};

WizardFormSignInPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WizardFormSignInPage);
