import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login'

function App() {
  return (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />

    {/* <Route exact path="/contacts" component={() => <Home />} /> */}
  </Switch>
  );
}

export default App;
