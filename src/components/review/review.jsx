import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {

	const {review} = props;

	const rating = review.rating * 20;

	return (
		<li className="reviews__item">
			<div className="reviews__user user">
				<div className="reviews__avatar-wrapper user__avatar-wrapper">
					<img className="reviews__avatar user__avatar" src={`/` + review.ava} width="54" height="54" alt="Reviews avatar"/>
				</div>
				<span className="reviews__user-name">{review.name}</span>
			</div>
			<div className="reviews__info">
				<div className="reviews__rating rating">
					<div className="reviews__stars rating__stars">
						<span style={{width: rating + '%'}}/>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<p className="reviews__text">
					{review.text}
				</p>
				<time className="reviews__time" dateTime={review.dateTime}>{review.date}</time>
			</div>
		</li>
	);
};

Review.propTypes = {
	review: PropTypes.object.isRequired
};

export default Review;
