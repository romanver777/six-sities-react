import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {BASE_URL, LOCATION_BUTTON_CLASS} from '../../const';

const LocationButton = (props) => {

	const {city, onFavoriteCityClick, prefix} = props;

	const handleFavotiteCityClick = () => onFavoriteCityClick(city);

	return (
		<div className={LOCATION_BUTTON_CLASS[prefix.toUpperCase()]}>
			<div className="locations__item">
				<Link to={BASE_URL} className="locations__item-link buttonLink"
							onClick={handleFavotiteCityClick}
				>
					<span>{city}</span>
				</Link>
			</div>
		</div>
	);
};

LocationButton.propTypes = {
	city: PropTypes.string.isRequired,
	onFavoriteCityClick: PropTypes.func.isRequired,
	prefix: PropTypes.string.isRequired,
};

export default LocationButton;