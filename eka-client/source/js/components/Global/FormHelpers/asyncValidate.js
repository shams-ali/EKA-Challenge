import axios from 'axios';

const asyncValidate = ({ email }) => {
  return axios.get(`http://localhost:3030/users?email=${ email }`)
    .then(({ data: { data } }) => (data.length ? { email: 'This email already exists' } : null))
    .catch((err) => {
      console.error(err);
      return { email: 'There was an internal error' };
    });
};

export default asyncValidate;
