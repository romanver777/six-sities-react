import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthRequired, ...rest}) => (
	<Route {...rest} render={(props) => (
		isAuthRequired === false
			? <Component {...rest} {...props}/>
			: <Redirect to='/'/>
	)}/>
);

export default PrivateRoute;
