import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from 'components/Global/MaterialUIForm/validate';
import asyncValidate from 'components/Global/MaterialUIForm/asyncValidate';
import renderTextField from 'components/Global/MaterialUIForm/renderTextField';

// import TextField from 'material-ui/TextField';
// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
// import Checkbox from 'material-ui/Checkbox';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={ (e) => console.log('SUBMIT!!!!', e) }>
      <div>
        <Field
          name='firstName'
          component={ renderTextField }
          label='First Name'
        />
      </div>
      {/* <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={renderRadioGroup}>
          <RadioButton value="male" label="male" />
          <RadioButton value="female" label="female" />
        </Field>
      </div>
      <div>
        <Field
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
        >
          <MenuItem value="ff0000" primaryText="Red" />
          <MenuItem value="00ff00" primaryText="Green" />
          <MenuItem value="0000ff" primaryText="Blue" />
        </Field>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiLine={true}
          rows={2}
        />
      </div> */}
      <div>
        <button type='submit' disabled={ pristine || submitting }>
          Submit
        </button>
        <button type='button' disabled={ pristine || submitting } onClick={ reset }>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm);
