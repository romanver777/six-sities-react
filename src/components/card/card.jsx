import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import BookmarkButton from '../bookmark-button/bookmark-button';
import {BASE_URL} from '../../const';

const Card = (props) => {

  const {item, isFavorite} = props;

	const handleClick = (e) => props.onClick(e);
	const handleMouseOver = (e) => props.onMouseOver(e);
	const handleMouseLeave = () => props.onMouseLeave();
	const handleBookmarkClick = (offer, small) => props.onBookmarkClick(offer, small);

  return (
    <article className="cities__place-card place-card"
             id={item.id}
             onMouseOver={() => handleMouseOver(item)}
             onMouseLeave={handleMouseLeave}
    >
      { item.mark
        ? (
          <div className="place-card__mark">
            <span>{item.mark}</span>
          </div>)
        : null
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={BASE_URL + `/offer/` + item.hotelId}
              className="buttonLink"
              onClick={() => handleClick(item)}
        >
          <img className="place-card__image" src={BASE_URL + `/` + item.img} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{item.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{item.priceText}</span>
          </div>

          <BookmarkButton
            onBookmarkClick={(small) => handleBookmarkClick(item, small)}
            isActive={isFavorite}
            small={true}
          />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: 93 + '%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={BASE_URL + `/offer/${item.hotelId}`}
                className="card__title buttonLink"
                onClick={() => handleClick(item)}
          >{item.title}</Link>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
	onBookmarkClick: PropTypes.func,
};

export default Card;
