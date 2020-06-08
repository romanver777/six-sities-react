import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

class CardList extends React.Component {

	constructor(props) {
		super(props);
		const {items} = this.props.items;

		this.state = {
			items: items,
		}

	}

	handleClick = (item) => this.props.onClick(item);
	handleMouseOver = (item) => this.props.onMouseOver(item);
	handleMouseLeave = (e) => this.props.onMouseLeave(e);
	handleBookmarkClick = (offer, small) => this.props.onBookmarkClick(offer, small);

	isFavorite = (favoriteList, item) => {

		if (favoriteList) {
			let isFavorite = favoriteList.filter((it) => it.hotelId === item.hotelId);

			return !!isFavorite.length;
		}
	};

	render() {
		const {items, favoriteList} = this.props;

		return (

			items.map((item) => {

				return <Card
					item={item}
					key={item.hotelId}
					isFavorite={this.isFavorite(favoriteList, item)}
					onClick={this.handleClick}
					onMouseOver={this.handleMouseOver}
					onMouseLeave={this.handleMouseLeave}
					onBookmarkClick={this.handleBookmarkClick}
				/>
			})
		)
	}
}

CardList.propTypes = {
	city: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	onClick: PropTypes.func,
	onMouseOver: PropTypes.func,
	onMouseLeave: PropTypes.func,
};

export default CardList;
