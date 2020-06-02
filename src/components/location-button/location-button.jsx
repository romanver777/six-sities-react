import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LocationButton = (props) => {

	const {city} = props;

	return (
		<div className="favorites__locations locations locations--current">
			<div className="locations__item">
				<button className="locations__item-link buttonLink">
					<span>{city}</span>
				</button>
			</div>
		</div>
	);
};

LocationButton.propTypes = {
	city: PropTypes.string.isRequired,
};

export default LocationButton;