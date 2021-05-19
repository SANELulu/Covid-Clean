import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/User";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Locations from "./pages/Locations";
import Details from "./pages/Details";
import PostRating from "./components/PostRating";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/locations" component={Locations} />
        {/* /details needs to be locations:id */}
        <Route exact path="/details" component={Details} />
        <Route path="/details/:id" component={Details} />
        <Route exact path="/ratepost" component={PostRating} />
        {/* <Route exact path="/location" component={Locations} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
