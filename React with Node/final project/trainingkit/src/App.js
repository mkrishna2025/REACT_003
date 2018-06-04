import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/login';
import Home from './containers/home';
import UnImplemented from './containers/unimplemented';
import Demo from './containers/demo';
import Partners from './containers/partners';
import Maps from './containers/maps';
import Tabs from './containers/tabs';
import MasterPage from './components/masterpage';
import Caurosal from './containers/carouseldemo/index2';
import ChartsDemo from './containers/chartsdemo';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
      return (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/demo" component={Demo} />
          <Route path="/partners" component={Partners} />
          <Route path="/home" component={Home} />
          <Route path="/*" component={UnImplemented} />
        </Switch>
      );
    }
}

class App2 extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/demo" component={Demo} />
        <Route path="/partners" render={(props) => <Partners {...props} /> } />
        <Route path="/home" component={Home} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

class App3 extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/demo" component={Demo} />
        <Route path="/partners" render={(props) => <MasterPage><Partners {...props} /></MasterPage> } />
        <Route path="/home" component={Home} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

const CustomRoute0 = function(props) {
  debugger;
  return <Route {...props} />;
}
const CustomRoute = (props) => <Route {...props} />

const CustomRoute2 = ({component: DynamicComponent, ...rest}) => 
    <Route {...rest} component={DynamicComponent}/>

const CustomRoute3 = ({component: DynamicComponent, ...rest}) =>
    <Route {...rest} render={props =>{
      return <DynamicComponent {...props} />
    }}/>

const MasterPageRoute = ({component: DynamicComponent, ...rest}) => 
    <Route {...rest} render={props =>{
      return <MasterPage {...props}><DynamicComponent {...props} /></MasterPage>
}}/>


class App4 extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <CustomRoute0 path="/demo" component={Demo} />
        <MasterPageRoute path="/partners" component={Partners}/>
        <Route path="/home" component={Home} />
        <Route path="/maps" component={Maps} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/caurosal" component={Caurosal} />
        <Route path="/charts" component={ChartsDemo} />
        
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App4;