import React, { Component } from 'react';
import Routes from 'config/routes';
import ReduxModal from 'react-redux-modal';
import Menu from 'components/Global/Menu';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Menu />
        <div className='Page'>
          <Routes />
        </div>
        <ReduxModal />
      </div>
    );
  }
}
