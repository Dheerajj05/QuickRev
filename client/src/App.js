import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Login from "./component/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./component/Signup/signup";
import About from "./extra/contact/about";
import Create from "./create_post";
import Motivation from "./extra/motivation";
import Edit from "./component/edit_post";
import Update from "./component/update_page";
import Contact from "./extra/about";
import AuthenticatedRoute from "./component/authRoutes";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <AuthenticatedRoute exact path="/home" component={Home} />
        <AuthenticatedRoute exact path="/contact" component={About} />
        <AuthenticatedRoute exact path="/about" component={Contact} />
        <AuthenticatedRoute exact path="/postcreate" component={Create} />
        <AuthenticatedRoute exact path="/motivation" component={Motivation} />
        <AuthenticatedRoute exact path="/edit/:id" component={Edit} />
        <AuthenticatedRoute exact path="/update/:id" component={Update} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;





