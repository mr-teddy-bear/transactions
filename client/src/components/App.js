import React from 'react';
import { Switch, Route } from 'react-router-dom';
import History from './History';
import Home from './Home';
import Login from './Login'
import Salary from './Salary';
import Settings from './Settings';
import Valute from './Valute';

function App() {
  return (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/history" component={History} />
    <Route exact path="/salary" component={Salary} />
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/valute" component={Valute} />
    {/* <Route exact path="/contacts" component={() => <Home />} /> */}
  </Switch>
  );
}

export default App;
