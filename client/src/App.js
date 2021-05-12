import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
