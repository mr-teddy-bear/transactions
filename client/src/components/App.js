import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import History from "./History";
import Home from "./Home";
import Login from "./Login";
import Salary from "./Salary";
import Settings from "./Settings";
import Valute from "./Valute";
import PrivateRoute from "./PrivateRoute";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute
        allow={isAuth}
        path="/home"
        exact
        component={Home}
        redirectTo="/"
      />
      <Route exact path="/home" component={Home} />
      <Route exact path="/events" component={History} />
      <Route exact path="/salary" component={Salary} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/valute" component={Valute} />
      {/* <Route exact path="/contacts" component={() => <Home />} /> */}
    </Switch>
  );
}

export default App;
