import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from 'components/Global/FormHelpers/validate.js';
import renderTextField from 'components/Global/FormHelpers/renderTextField';

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <Field
        name='street'
        component={ renderTextField }
        maxLength='64'
        label='Street*'
        type='text'
      />
      <Field
        name='city'
        component={ renderTextField }
        maxLength='64'
        label='City*'
        type='text'
      />
      <Field
        name='state'
        component={ renderTextField }
        maxLength='2'
        label='State*'
        type='text'
      />
      <Field
        name='zip'
        component={ renderTextField }
        maxLength='5'
        label='Zip Code*'
        type='text'
      />
      <div>
        <button type='button' className='previous' onClick={ previousPage }>
          Previous
        </button>
        <button type='submit' disabled={ pristine || submitting }>
          Submit
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', // Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
