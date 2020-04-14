import React from 'react';
import renderer from 'react-test-renderer';
import CardList from './card-list';
import mocks from '../../mocks/offers';

it(`CardList renders`, () => {

  const tree = renderer.create(<CardList
    items={mocks}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
