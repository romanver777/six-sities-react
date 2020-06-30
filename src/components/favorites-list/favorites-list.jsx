import React from 'react';
import PropTypes from 'prop-types';

import LocationButton from '../location-button/location-button';
import FavoriteCard from '../favorite-card/favorite-card';

const FavoritesList = (props) => {

	const {favoriteList, onBookmarkClick, onFavoriteCityClick} = props;

	const handleBookmarkClick = (item) => onBookmarkClick(item);

	const handleFavoriteCityClick = (city) => onFavoriteCityClick(city);

	return (
		<ul className="favorites__list">

			{favoriteList.map((cityObj, ind) => {

				return (
					<li className="favorites__locations-items" key={cityObj.city + ind}>

						<LocationButton
							city={cityObj.city}
							key={cityObj.city + ind}
							onFavoriteCityClick={handleFavoriteCityClick}
							prefix="favorites"
						/>

						<div className="favorites__places">

							{cityObj.favorites.map((hotel) => {

								return (
										<FavoriteCard
											item={hotel}
											key={hotel.hotelId}
											onBookmarkClick={handleBookmarkClick}
										/>
								);
							})}

						</div>
					</li>
				);
			})}
		</ul>
	);
};

FavoritesList.propTypes = {
	favoriteList: PropTypes.array.isRequired,
	onBookmarkClick: PropTypes.func.isRequired,
	onFavoriteCityClick: PropTypes.func.isRequired,
};

export default FavoritesList;
