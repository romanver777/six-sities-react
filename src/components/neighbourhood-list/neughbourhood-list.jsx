import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../card-list/card-list';

const NeighbourhoodList = (props) => {

	const {items, city, favoriteList} = props;

	const handleClick = (item) => props.onClick(item);
	const handleMouseOver = (item) => props.onMouseOver(item);
	const handleMouseLeave = (e) => props.onMouseLeave(e);
	const handleBookmarkClick = (offer, small) => props.onBookmarkClick(offer, small);

	return <CardList
		city={city}
		items={items}
		favoriteList={favoriteList}
		onClick={handleClick}
		onMouseOver={handleMouseOver}
		onMouseLeave={handleMouseLeave}
		onBookmarkClick={handleBookmarkClick}
	/>
};

NeighbourhoodList.propTypes = {
	items: PropTypes.array.isRequired,
	onCLick: PropTypes.func,
	onMouseOver: PropTypes.func.isRequired,
	onMouseLeave: PropTypes.func.isRequired
};

export default NeighbourhoodList;
