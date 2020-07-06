import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';

const ReviewList = (props) => {

	const {reviews} = props;

	return (
		<React.Fragment>
		<h2 className="reviews__title">
			Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
		</h2>
		<ul className="reviews__list">

			{reviews.map((it) => {
				return <Review
					review={it}
					key={it.id}
					/>
			})}

		</ul>
		</React.Fragment>
	);
};

ReviewList.propTypes = {
	reviews: PropTypes.array.isRequired
};

export default ReviewList;
