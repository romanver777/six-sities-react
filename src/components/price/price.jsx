import React from 'react';
import PropTypes from 'prop-types';

const Price = (props) => {

	const {price, prefix} = props;

	return (
		<div className={`${prefix}__price`}>
			<b className={`${prefix}__price-value`}>&euro;{price}</b>
			<span className={`${prefix}__price-text`}>
				{prefix === `place-card` ? `/` : ``}&nbsp;night
			</span>
		</div>
	);
};

Price.propTypes = {
	price: PropTypes.number.isRequired,
	prefix: PropTypes.string.isRequired,
};

export default Price;
