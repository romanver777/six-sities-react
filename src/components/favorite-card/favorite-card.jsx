import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {BASE_URL} from '../../const';

import BookmarkButton from '../bookmark-button/bookmark-button';

const FavoriteCard = (props) => {

	const {item} = props;

	const handleBookmarkClick = () => props.onBookmarkClick(props.item);

	return (
		<article className="favorites__card place-card">
			<div className="favorites__image-wrapper place-card__image-wrapper">
				<Link to={BASE_URL + `/offer/` + item.hotelId} className="buttonLink">
					<img className="place-card__image" src={BASE_URL + `/` + item.img} width="150" height="110" alt="Place"/>
				</Link>
			</div>
			<div className="favorites__card-info place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">&euro;{item.price}</b>
						<span className="place-card__price-text">&#47;&nbsp;{item.priceText}</span>
					</div>

					<BookmarkButton
						onBookmarkClick={handleBookmarkClick}
						isActive={true}
						small={true}
					/>

				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{width: 100 + '%'}}/>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
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