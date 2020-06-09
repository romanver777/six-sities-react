import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app/app';
import {reducer, Operation, ActionCreator} from './reducer';
import createAPI from './api';


const init = () => {

	const onUnauthorized = () => {
		store.dispatch(ActionCreator.requireAuthorization(true));
	};

	const api = createAPI(onUnauthorized);

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
			window.__REDUX_DEVTOOLS_EXTENSION__ ?
				window.__REDUX_DEVTOOLS_EXTENSION__():(f)=>f
    )
	);

  store.dispatch(Operation.loadHotels())
		.then(() => {

			const city = store.getState().hotels[0].city;

			if (city) store.dispatch(ActionCreator.setCity(city));
		});
  store.dispatch(Operation.checkAuth());

  ReactDom.render(
    <Provider store={store}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
    </Provider>,
    document.getElementById(`root`)
  );
};

init();
