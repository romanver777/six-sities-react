import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app';
import {reducer, Operation} from './reducer';


const init = () => {

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ ?
				window.__REDUX_DEVTOOLS_EXTENSION__():(f)=>f
    )
	);

  store.dispatch(Operation.loadHotels());

  ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
  );
};

init();
