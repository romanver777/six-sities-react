import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

const CardList = (props) => {

	const {items} = props;

	const handleClick = (item) => props.onClick(item);
	const handleMouseOver = (item) => props.onMouseOver(item);
	const handleMouseLeave = (e) => props.onMouseLeave(e);

	return (

		items.map((item) => {

			return <Card
				item={item}
				key={item.id}
				onClick={handleClick}
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
			/>
		})
	)
};

CardList.propTypes = {
	items: PropTypes.array.isRequired,
	onClick: PropTypes.func,
	onMouseOver: PropTypes.func,
	onMouseLeave: PropTypes.func,
};

export default CardList;
