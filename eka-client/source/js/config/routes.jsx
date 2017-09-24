import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'views/Dashboard';
import About from 'views/About';
import Form from 'views/Form';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  FORM: `${ publicPath }form`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Dashboard } />
    <Route path={ routeCodes.ABOUT } component={ About } />
    <Route path={ routeCodes.FORM } component={ Form } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
