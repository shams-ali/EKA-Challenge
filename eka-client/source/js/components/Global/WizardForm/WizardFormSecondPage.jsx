import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from 'components/Global/FormHelpers/validate';
import renderTextField from 'components/Global/FormHelpers/renderTextField';
import normalizePhone from 'components/Global/FormHelpers/normalizePhone';

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name='firstName'
        type='text'
        component={ renderTextField }
        label='First Name'
      />
      <Field
        name='lastName'
        type='text'
        component={ renderTextField }
        label='Last Name'
      />
      <Field
        name='phone'
        component={ renderTextField }
        maxLength='64'
        label='Phone*'
        type='text'
        normalize={ normalizePhone }
      />
      <div>
        <button type='button' className='previous' onClick={ previousPage }>
          Previous
        </button>
        <button type='submit' className='next'>
          Next
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
})(WizardFormSecondPage);
