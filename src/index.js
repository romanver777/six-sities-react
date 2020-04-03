import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app';

const init = () => {

  const items = [
    `Beautiful &amp; luxurious apartment at great location`,
    `Wood and stone place`,
    `Best stone place`,
    `WoodHouse`,
    `Cozy Apts`
  ];

  ReactDom.render(
      <App
        items={items}
      />,
      document.getElementById(`root`)
  );
};

init();
