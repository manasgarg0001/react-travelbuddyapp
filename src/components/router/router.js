import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "../navbar";
import Contact from "../pages/contact";

// import Contact from "../../components/pages/contact";
import Places from "../pages/places";
import About from "../pages/about";
import Packages from "../pages/packages";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/packages">
          <Packages />
        </Route>
        <Route path="/place">
          <Places />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
};
export default Routes;
