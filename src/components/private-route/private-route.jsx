import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Favorites from '../favorites/favorites';

const PrivateRoute = ({component: Component, ...rest}) => (
	<Route {...rest} render={(props) => (
		props.isAuthRequired === true
			? <Favorites {...props}/>
			: <Redirect to='/'/>
	)}/>
);

export default PrivateRoute;
