import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../card-list/card-list';

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

NeighbourhoodList.propTypes = {
	items: PropTypes.array.isRequired,
	onCLick: PropTypes.func,
	onMouseOver: PropTypes.func.isRequired,
	onMouseLeave: PropTypes.func.isRequired
};

export default NeighbourhoodList;
