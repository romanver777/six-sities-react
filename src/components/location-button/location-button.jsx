import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LocationButton = (props) => {

	const {city, onFavoriteCityClick} = props;

	const handleFavotiteCityClick = () => onFavoriteCityClick(city);

	return (
		<div className="favorites__locations locations locations--current">
			<div className="locations__item">
				<Link to="/" className="locations__item-link buttonLink"
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
};

export default LocationButton;