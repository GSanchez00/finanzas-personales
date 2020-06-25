import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute({ isAuthenticated, children, component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
          isAuthenticated ? (
            <Component />
          ) : (
            <Redirect
              to={{pathname: "/login"}}
            />
          )
        }
      />
    );
  }