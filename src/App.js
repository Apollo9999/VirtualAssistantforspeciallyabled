import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navb from './components/Navb'
import Login from './components/Login'
import Home from './components/Home'
import Thanks from './components/Thanks';
function App() {
  return (
    <Router>
      <Navb></Navb>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/thanks' component={Thanks}></Route>
      </Switch>
    </Router>
  );
}

export default App;
