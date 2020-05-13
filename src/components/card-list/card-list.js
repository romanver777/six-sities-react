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

	static getDerivedStateFromProps (props, state) {
		if(props.items !== state.items){
			return {
				...state, ...{items: props.items}
			}
		}
		return null;
	}

	render() {
		const {items} = this.props;

		return (

			items.map((item) => {

				return <Card
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
	items: PropTypes.array.isRequired,
	onClick: PropTypes.func,
	onMouseOver: PropTypes.func,
	onMouseLeave: PropTypes.func,
};

export default CardList;
