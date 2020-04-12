import React from 'react';
import Card from '../card/card';

const CardList = (props) => {

	const {items} = props;

	return (
		items.map((item, ind) => {

			return <Card
				item={item}
				key={item.title + ind}
			/>
		})
	)

};

export default CardList;
