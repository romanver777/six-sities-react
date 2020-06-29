import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

import FavoritesList from '../favorites-list/favorites-list';
import Header from '../header/header';
import {BASE_URL} from '../../const';

const formatFavoriteList = (arrayOfObject) => {

	let cities = new Set();
	let arr = [];
	let obj = {
		city: '',
		favorites: [],
	};

	arrayOfObject.forEach((it) => cities.add(it.city));

	for(const city of cities) {

		for(const favorite of arrayOfObject) {

			if (city === favorite.city) {

				obj.city = city;
				obj.favorites.push(favorite);
			}
		}
		arr.push(obj);
		obj = {
			city: '',
			favorites: [],
		};
	}
	return arr;
};

const Favorites = (props) => {

	const {favoriteList, toggleBookmark, cityClick, isAuthRequired, currentUser} = props;

	const handleBookmarkClick = (item) => toggleBookmark(item, favoriteList);

	const handleFavoriteCityClick = (city) => cityClick(city);

	document.title = `6 cities - favorites`;

	return (
		<div className={`page ${!favoriteList.length ? `page--favorites-empty` : ``}`}>

			<Header
				isAuthorizationRequired={isAuthRequired}
				currentUser={currentUser}
			/>

			{favoriteList.length
				? <main className="page__main page__main--favorites">
					<div className="page__favorites-container container">
						<section className="favorites">
							<h1 className="favorites__title">Saved listing</h1>

							<FavoritesList
								favoriteList={formatFavoriteList(favoriteList)}
								onBookmarkClick={handleBookmarkClick}
								onFavoriteCityClick={handleFavoriteCityClick}
							/>

						</section>
					</div>
				</main>
				: <main className="page__main page__main--favorites page__main--favorites-empty">
					<div className="page__favorites-container container">
						<section className="favorites favorites--empty">
							<h1 className="visually-hidden">Favorites (empty)</h1>
							<div className="favorites__status-wrapper">
								<b className="favorites__status">Nothing yet saved.</b>
								<p className="favorites__status-description">Save properties to narrow down search or plan yor future
									trips.</p>
							</div>
						</section>
					</div>
				</main>
			}
			<footer className="footer">
				<Link to={BASE_URL} className="footer__logo-link" href="main.html">
					<img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
				</Link>
			</footer>
		</div>
	);
};

Favorites.propTypes = {
	favoriteList: PropTypes.array.isRequired,
	isAuthRequired: PropTypes.bool.isRequired,
	currentUser: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {

	return Object.assign({}, ownProps, {});
};

const mapDispatchToProps = (dispatch) => ({

	cityClick: (city) => dispatch(ActionCreator.setCity(city)),
	toggleBookmark: (cityOffer, favoriteList) => dispatch(ActionCreator.toggleFavorite(cityOffer, favoriteList)),
});

export {Favorites}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);