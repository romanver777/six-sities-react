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

	mouseOverHandler = (item) => {

		this.setState( {card: item} );
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
