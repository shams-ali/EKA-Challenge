import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from 'components/Global/FormHelpers/validate';
import renderTextField from 'components/Global/FormHelpers/renderTextField.jsx';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name='username'
        type='text'
        component={ renderTextField }
        label='Username'
      />
      <Field
        name='password'
        type='password'
        component={ renderTextField }
        label='Password'
      />
      <Field
        name='email'
        type='text'
        component={ renderTextField }
        label='Email'
      />
      <div>
        <button type='submit' className='next'>
          Login
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WizardFormFirstPage);
