import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';
import offers from './mocks/offers';
import {reducer} from './reducer';


const init = (props) => {

  const store = createStore(reducer);

  ReactDom.render(
    <Provider store={store}>
      <App
        items={props}
      />
     </Provider>,
      document.getElementById(`root`)
  );
};

init(offers);
