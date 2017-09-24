import axios from 'axios';
import client from 'components/Global/feathers';

const asyncValidate = ({ email, username }) => {
  const errors = {};
  return client.service('users').find({ query: { email } })
    .then(({ data }) => {
      if (data.length) {
        errors.email = 'This email already exists';
      }
      return client.service('users').find({ query: { username } });
    })
    .then(({ data }) => {
      if (data.length) {
        errors.username = 'This username already exists';
      }
      return errors;
    })
    .catch((error) => console.error(error));
};

export default asyncValidate;
