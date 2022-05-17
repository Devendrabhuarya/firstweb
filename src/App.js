import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./project/Home";
import Contact from "./project/Contact";
import About from "./project/About";
import Service from "./project/Service";
import { Navbar } from "./project/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
