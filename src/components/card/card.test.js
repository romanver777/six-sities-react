import React from 'react';
import renderer from 'react-test-renderer';
import Card from './card';

it(`Card renders`, () => {

  const tree = renderer.create(<Card
    item="a"
		index={0}
    key="b"
    onClick={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
