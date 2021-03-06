import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'config/routes';
import EKALogoImg from '../../../assets/img/eka-logo.png';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-logo'>
          <img
            src={ EKALogoImg }
            alt='EKA Logo'
          />
        </div>
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={ routeCodes.DASHBOARD }
          >
            Home
          </NavLink>
        </div>
      </div>
    );
  }
}
