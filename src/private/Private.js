import React from 'react';
import { Navigate, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Private = ({children , ...rest}) => {
    const {user} =useAuth();
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default Private;