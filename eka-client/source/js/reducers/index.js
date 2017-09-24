import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as modalReducer } from 'react-redux-modal';
import app from 'reducers/app';

export default combineReducers({
  app,
  form: formReducer,
  modals: modalReducer,
});
