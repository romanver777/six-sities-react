import React from 'react';
import PropTypes from 'prop-types';

const size = {
	default: {
		prefix: `property`,
		width: 31,
		height: 33,
	},
	small: {
		prefix: `place-card`,
		width: 18,
		height: 19,
	}
};

const BookmarkButton = (props) => {

	const {onBookmarkClick, isActive, small} = props;

	const prefix = small ? size.small.prefix : size.default.prefix;
	const buttonClassActive = isActive ? `${prefix}__bookmark-button--active` : ``;

	return (
		<button className={`${prefix}__bookmark-button ${buttonClassActive} button`}
						type="button"
						onClick={() => onBookmarkClick(small)}
		>
			<svg className={`${prefix}__bookmark-icon`}

					 width={small ? size.small.width : size.default.width}
					 height={small ? size.small.height : size.default.height}
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
	isActive: PropTypes.bool,
	onBookmarkClick: PropTypes.func,
};

export default BookmarkButton;
