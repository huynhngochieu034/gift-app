import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';

import Login from './components/login/login';
import Home from './components/home/home';
import PrivateRoute from './shared/private/PrivateRoute';
import PageNotFound from './shared/error/page-not-found';
// import { AUTHORITIES } from './config/constants';

// const Home = Loadable({
//   loader: () => import(/* webpackChunkName: "administration" */ 'components/home/home'),
//   loading: () => <div>loading ...</div>,
// });

const Routes = () => {
  return (
      <BrowserRouter>
      <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" exact component={Home} />
          <Route component={PageNotFound} />
          </Switch>
      </BrowserRouter>
  );
};

export default Routes;
