import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const BookmarkButton = (props) => {

	const {isFavorite, onBookmarkClick, isAuthRequired} = props;

	return (
		isAuthRequired
			? <Link to="/login" className="property__bookmark-button button"
					type="button"
				>
					<svg className="property__bookmark-icon"
							 width="31"
							 height="33"
					>
						<use xlinkHref="#icon-bookmark"/>
					</svg>
				<span className="visually-hidden">To bookmarks</span>
			</Link>
			: <button className="property__bookmark-button button"
						type="button"
						onClick={onBookmarkClick}
				>
				<svg className="property__bookmark-icon"
						 width="31"
						 height="33"
						 style={isFavorite ? {fill: `#4481c3`, stroke: `#4481c3`} : null}
				>
					<use xlinkHref="#icon-bookmark"/>
				</svg>
				<span className="visually-hidden">To bookmarks</span>
			</button>
	);
};

BookmarkButton.propTypes = {
	isFavorite: PropTypes.bool.isRequired,
	onBookmarkClick: PropTypes.func,
	isAuthRequired: PropTypes.bool,
};

export default BookmarkButton;
