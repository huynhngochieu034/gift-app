import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../../shared/authentication/AuthService';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            true ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;