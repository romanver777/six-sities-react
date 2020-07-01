import React from 'react';
import PropTypes from 'prop-types';

const PropertyFeatures = (props) => {

	const {offer} = props;

	return (
		<ul className="property__features">
			<li className="property__feature property__feature--entire">
				Entire place
			</li>
			<li className="property__feature property__feature--bedrooms">
				{offer.bedrooms} Bedrooms
			</li>
			<li className="property__feature property__feature--adults">
				Max {offer.max_adults} adults
			</li>
		</ul>
	);
};

PropertyFeatures.propTypes = {
	offer: PropTypes.object.isRequired,
};

export default PropertyFeatures;
