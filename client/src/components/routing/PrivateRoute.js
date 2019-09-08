import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../comtext/authContext/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthencated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthencated && !loading ? (

          <Redirect to='/login' />
        ) : (
            <Component {...props} />
          )
      }
    />
  );
};

export default PrivateRoute;
