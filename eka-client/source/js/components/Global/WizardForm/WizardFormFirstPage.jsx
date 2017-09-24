import React from 'react';
import { Field, reduxForm } from 'redux-form';

import validate from 'components/Global/FormHelpers/validate.js';
import renderTextField from 'components/Global/FormHelpers/renderTextField.jsx';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name='email'
        type='text'
        component={ renderTextField }
        label='Please Input Your Email'
      />
      <Field
        name='lastName'
        type='text'
        component={ renderTextField }
        label='Last Name'
      />
      <div>
        <button type='submit' className='next'>
          Save
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
