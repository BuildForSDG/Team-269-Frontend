import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import SignUp from './components/signup/SignUp';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/register" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
