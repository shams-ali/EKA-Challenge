import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'views/Dashboard';
import Success from 'views/Success';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  SUCCESS: `${ publicPath }success`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Dashboard } />
    <Route path={ routeCodes.SUCCESS } component={ Success } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
