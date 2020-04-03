import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './card';

Enzyme.configure({adapter: new Adapter()});

it(`Card title clicked`, () => {

  const clickHandler = jest.fn();
  const card = shallow(<Card
    item="a"
    key="b"
		index={0}
    onClick={clickHandler}
  />);

  const title = card.find(`.card__title`);
  title.simulate(`click`, {
    preventDefault: () => {},
  });

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
