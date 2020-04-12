import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const init = (props) => {

  // const {offer} = props;

  ReactDom.render(
      <App
        items={props}
      />,
      document.getElementById(`root`)
  );
};

init(offers);
