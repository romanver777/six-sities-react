import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

class CardList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			card: {}
		};
	}

	mouseOverHandler = (e) => {

		let cardID = e.target.closest('.place-card').id;
		let item = this.props.items[cardID];

		this.setState((prevState) => {

			return (
				{
					...prevState,
					card: item
				}
			)
		});
	};

	render() {

		const {items} = this.props;

		return (

			items.map((item, ind) => {

				return <Card
					item={item}
					index={ind}
					key={item.title + ind}
					onMouseOver={this.mouseOverHandler}
				/>
			})
		)
	}

}

CardList.propTypes = {
	items: PropTypes.array.isRequired
};

export default CardList;
