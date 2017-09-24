import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import validate from 'components/Global/FormHelpers/validate';
import renderTextField from 'components/Global/FormHelpers/renderTextField';
import normalizePhone from 'components/Global/FormHelpers/normalizePhone';

const WizardFormSecondPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field
          name='firstName'
          type='text'
          component={ renderTextField }
          label='First Name'
        />
      </div>
      <div>
        <Field
          name='lastName'
          type='text'
          component={ renderTextField }
          label='Last Name'
        />
      </div>
      <div>
        <Field
          name='phone'
          component={ renderTextField }
          maxLength='64'
          label='Phone*'
          type='text'
          normalize={ normalizePhone }
        />
      </div>
      <div>
        <button type='submit' className='next'>
          Next
        </button>
      </div>
    </form>
  );
};

WizardFormSecondPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WizardFormSecondPage);
