import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card';
import mocks from '../../mocks/offers';

const item = mocks[0];

it(`Card renders`, () => {

  const tree = renderer.create(<Card
    item={item}
    index={0}
    onMouseOver={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
