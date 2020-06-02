import React from 'react';
import PropTypes from 'prop-types';

import LocationButton from '../location-button/location-button';
import FavoriteCard from '../favorite-card/favorite-card';


const FavoritesList = (props) => {

	const {favoriteList} = props;

	return (
		<ul className="favorites__list">

			{favoriteList.map((cityObj, ind) => {

				return (
					<li className="favorites__locations-items" key={cityObj[ind]}>

						<LocationButton
							city={cityObj.city}
							key={cityObj.city}
							prefix="favorites"
						/>

						<div className="favorites__places">

							{cityObj.favorites.map((hotel) => {

								return (
										<FavoriteCard
											item={hotel}
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