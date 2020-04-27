import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../card-list/card-list';
import Card from '../card/card';
import Neighbourhood from '../neighbourhood/neighbourhood';

const NeighbourhoodList = (props) => {

	const {items} = props;


	const handleClick = (item) => props.onClick(item);
	const handleMouseOver = (item) => props.onMouseOver(item);
	const handleMouseLeave = (e) => props.onMouseLeave(e);

	return <CardList
		items={items}
		onClick={handleClick}
		onMouseOver={handleMouseOver}
		onMouseLeave={handleMouseLeave}
	/>
};

export default NeighbourhoodList;
