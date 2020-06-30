import React from 'react';
import PropTypes from 'prop-types';

const Mark = (props) => {

	const {isPremium, prefix} = props;

	return isPremium ?
		<div className={`${prefix}__mark`}>
			<span>Premium</span>
		</div>
		: '';
};

Mark.propTypes = {
	isPremium: PropTypes.bool.isRequired,
	prefix: PropTypes.string.isRequired,
};

export default Mark;
