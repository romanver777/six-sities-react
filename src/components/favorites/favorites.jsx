import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import FavoritesList from '../favorites-list/favorites-list';

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

	const {favoriteList, isAuthRequired, currentUser} = props;

	return (
		<div className="page page--favorites-empty">
			<header className="header">
				<div className="container">
					<div className="header__wrapper">
						<div className="header__left">
							<Link to="/" className="header__logo-link" href="main.html">
								<img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
							</Link>
						</div>
						<nav className="header__nav">
							<ul className="header__nav-list">
								<li className="header__nav-item user">
									<button className="header__nav-link header__nav-link--profile buttonLink">
										<div className="header__avatar-wrapper user__avatar-wrapper">
										</div>
										<span className="header__user-name user__name">
											{!isAuthRequired
												? <Link to="/favorites">{currentUser.name}</Link>
												: <Link to="/login">Sign in</Link>}
										</span>
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			{favoriteList.length
				? <main className="page__main page__main--favorites">
					<div className="page__favorites-container container">
						<section className="favorites">
							<h1 className="favorites__title">Saved listing</h1>

							<FavoritesList
								favoriteList={formatFavoriteList(favoriteList)}
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
				<Link to="/" className="footer__logo-link" href="main.html">
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

export default Favorites;