import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const items = [`1`, `2`];

it(`App renders`, () => {
  const tree = renderer.create(<App
    items={items}
  />)
	.toJSON();

  expect(tree).toMatchSnapshot();
});
