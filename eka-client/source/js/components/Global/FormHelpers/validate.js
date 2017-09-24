const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.passwordCheck) {
    errors.passwordCheck = 'Required';
  }
  if (values.password !== values.passwordCheck) {
    errors.passwordCheck = 'Does Not Match Password';
  }
  if (!values.state) {
    errors.state = 'Required';
  } else if (!/^[A-Z]{2,2}$/i.test(values.state)) {
    errors.state = 'Invalid State Abbreviations: ex: CA';
  }
  if (!values.zip) {
    errors.zip = 'Required';
  } else if (!/^[0-9]{5,5}$/i.test(values.zip)) {
    errors.zip = 'Invalid Zip Code: ex: 70130';
  }
  return errors;
};

export default validate;
