import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import mocks from '../../mocks/offers';

it(`App renders`, () => {
  const tree = renderer.create(<App
    items={mocks}
  />)
	.toJSON();

  expect(tree).toMatchSnapshot();
});
