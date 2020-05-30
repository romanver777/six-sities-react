import React from 'react';
import PropTypes from 'prop-types';

const BookmarkButton = (props) => {

	const {onBookmarkClick, isActive} = props;

	return (
		<button className="property__bookmark-button button"
						type="button"
						onClick={onBookmarkClick}
		>
			<svg className="property__bookmark-icon"
					 width="31"
					 height="33"
					 style={isActive ? {fill: `#4481c3`, stroke: `#4481c3`} : {fill: `none`,
						 stroke: `#b8b8b8`}}
			>
				<use xlinkHref="#icon-bookmark"/>
			</svg>
			<span className="visually-hidden">To bookmarks</span>
		</button>
	);
};

BookmarkButton.propTypes = {
	isActive: PropTypes.bool.isRequired,
	onBookmarkClick: PropTypes.func,
};

export default BookmarkButton;
