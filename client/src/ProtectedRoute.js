import React from "react";
import { Route, Redirect } from "react-router";
import Auth from "./Auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return <Component {...props}></Component>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/error",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
