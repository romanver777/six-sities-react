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

	render() {
		const {items, city} = this.props;

		return (

			items.map((item) => {

				return <Card
					city={city}
					item={item}
					key={item.id}
					onClick={this.handleClick}
					onMouseOver={this.handleMouseOver}
					onMouseLeave={this.handleMouseLeave}
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
