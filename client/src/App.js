import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Locations from "./pages/Locations";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/locations" component={Locations} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
