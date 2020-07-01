import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {

	const {rating, prefix} = props;

	const maxRatingPersent = 100;
	const maxStars = 5;
	const currentRatingPersent = rating * maxRatingPersent / maxStars;

	return (
		<div className={`${prefix}__rating rating`}>
			<div className={`${prefix}__stars rating__stars`}>
				<span style={{width: currentRatingPersent + '%'}}/>
				<span className="visually-hidden">Rating</span>
			</div>
			{prefix === `property`
				? <span className={`${prefix}__rating-value rating__value`}>{rating}</span>
				: ``
			}
		</div>
	);
};

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	prefix: PropTypes.string.isRequired,
};

export default Rating;
