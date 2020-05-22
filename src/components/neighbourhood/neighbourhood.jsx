import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const Neighbourhood = (props) => {

	const {item} = props;

	const handleClick = (item) => props.onClick(item);
	const handleMouseOver = (item) => props.onMouseOver(item);
	const handleMouseLeave = (e) => props.onMouseLeave(e);

	return <Card
		item={item}
		onClick={handleClick}
		onMouseOver={handleMouseOver}
		onMouseLeave={handleMouseLeave}
	/>
};


export default Neighbourhood;