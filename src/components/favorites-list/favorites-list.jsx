import React from 'react';
import PropTypes from 'prop-types';

import LocationButton from '../location-button/location-button';
import FavoriteCard from '../favorite-card/favorite-card';

const isFavorite = (favoriteList, item) => {

	if (favoriteList) {
		let isFavorite = favoriteList.filter((it) => it.hotelId === item.hotelId);

		return !!isFavorite.length;
	}
};

const FavoritesList = (props) => {

	const {favoriteList} = props;

	const handleBookmarkClick = (item) => props.onBookmarkClick(item);

	return (
		<ul className="favorites__list">

			{favoriteList.map((cityObj, ind) => {

				return (
					<li className="favorites__locations-items" key={cityObj.city + ind}>

						<LocationButton
							city={cityObj.city}
							key={cityObj.city + ind}
							prefix="favorites"
						/>

						<div className="favorites__places">

							{cityObj.favorites.map((hotel) => {

								return (
										<FavoriteCard
											item={hotel}
											key={hotel.hotelId}
											/*isFavorite={isFavorite(favoriteList, hotel)}*/
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
};

export default FavoritesList;