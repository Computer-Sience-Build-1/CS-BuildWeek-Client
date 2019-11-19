import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

// * Checks if a user is authorized to access the game.
const isAuthorized = () => {
  return Boolean(localStorage.getItem("authToken"));
};


//  Creates a Protected Route from a passed in component. 
//  Only renders if user is Authorized. Otherwise redirects user to login.
//  returns Component (if auth) or Redirect (to login) 
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

/**
 * Sets public and private routes
 * /register and /login are currently public. The main landing page will only be accessible to authenticated users.
 *  return switch component routing users throughout app
 */
const Router = () => {
  return (
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />      
      {/* <ProtectedRoute path="/" component={} />  render the game in a protected route*/}
    </Switch>
  );
};

export default Router;
