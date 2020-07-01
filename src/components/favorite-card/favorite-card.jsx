import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {BASE_URL} from '../../const';
import Rating from '../rating/rating';
import Mark from '../mark/mark';
import Price from '../price/price';

import BookmarkButton from '../bookmark-button/bookmark-button';

const FavoriteCard = (props) => {

	const {item} = props;

	const handleBookmarkClick = () => props.onBookmarkClick(props.item);

	return (
		<article className="favorites__card place-card">

			<Mark
				isPremium={item.is_premium}
				prefix="place-card"
			/>

			<div className="favorites__image-wrapper place-card__image-wrapper">
				<Link to={BASE_URL + `/offer/` + item.hotelId} className="buttonLink">
					<img className="place-card__image" src={item.preview_image} width="150" height="110" alt="Place"/>
				</Link>
			</div>
			<div className="favorites__card-info place-card__info">
				<div className="place-card__price-wrapper">

					<Price
						price={item.price}
						prefix="place-card"
					/>

					<BookmarkButton
						onBookmarkClick={handleBookmarkClick}
						isActive={true}
						small={true}
					/>

				</div>

				<Rating
					rating={item.rating}
					prefix="place-card"
				/>

				<h2 className="place-card__name">
					<Link to={BASE_URL + `/offer/` + item.hotelId} className="card__title buttonLink">{item.title}</Link>
				</h2>
				<p className="place-card__type">{item.type}</p>
			</div>
		</article>
	);
};

FavoriteCard.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FavoriteCard;