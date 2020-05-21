import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

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

  store.dispatch(Operation.loadHotels());
  store.dispatch(Operation.checkAuth());

  ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
  );
};

init();
