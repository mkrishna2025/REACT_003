import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login';
import Home from './containers/home';
import UnImplemented from './containers/unimplemented';
import Demo from './containers/demo';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
      return (
        <Switch>
          <Route path="/" exact component={Demo} />
          <Route path="/home" component={Home} />
          <Route path="/*" component={UnImplemented} />
        </Switch>
      );
    }
}
  
export default App;