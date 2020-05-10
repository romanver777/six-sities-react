import React from 'react';
import PropTypes from 'prop-types';

import SortingType from '../sorting-type/sorting-type';
import CardList from '../card-list/card-list';
import CitiesList from '../cities-list/cities-list';
import Map from '../map/map';
import {getIndex} from '../../helpers/helpers';

class Main extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			hoverItem: null,
			offers: this.props.items[getIndex(this.props.items, this.props.city)].offers,
		}
	}

	handleClick = (item) => this.props.onClick(item);

	handleMouseOver = (item) => this.setState((prevState) => {

		return (prevState.hoverItem !== item) ? {hoverItem: item} : null;
	});

	handleMouseLeave = () => this.setState({hoverItem: null});

	handleCityClick = (city) => this.props.onCityClick(city);

	handleSortOffers = (option) => {

		let offers = this.state.offers;

		switch (option) {


			case `Popular`: {
				offers = offers.sort((a, b) => {

					if (a.id > b.id) return 1;
					if (a.id < b.id) return -1;
					return 0;
				});

				return offers;
			}

			case `Price: low to high`: {
				offers = offers.sort((a, b) => {

					if (a.price > b.price) return 1;
					if (a.price < b.price) return -1;
					return 0;
				});

				return offers;
			}
			case `Price: high to low`: {
				offers = offers.sort((a, b) => {

					if (a.price < b.price) return 1;
					if (a.price > b.price) return -1;
					return 0;
				});

				return offers;
			}
			case `Top rated first`: {
				offers = offers.sort((a, b) => {

					if (a.rating < b.rating) return 1;
					if (a.rating > b.rating) return -1;
					return 0;
				});

				return offers;
			}
		}

		this.setState({offers: offers});
	};

	render() {

		const {items, city} = this.props;
		const index = getIndex(items, city);
		const offers = items[index].offers;
		const cityCoord = items[index].coords;

		return (
			<div className="page page--gray page--main">
				<header className="header">
					<div className="container">
						<div className="header__wrapper">
							<div className="header__left">
								<button className="header__logo-link header__logo-link--active buttonLink">
									<img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
								</button>
							</div>
							<nav className="header__nav">
								<ul className="header__nav-list">
									<li className="header__nav-item user">
										<button className="header__nav-link header__nav-link--profile buttonLink">
											<div className="header__avatar-wrapper user__avatar-wrapper">
											</div>
											<span className="header__user-name user__name">Oliver.conner@gmail.com</span>
										</button>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>

				<main className="page__main page__main--index">

					<CitiesList items={items}
											city={city}
											onClick={this.handleCityClick}
					/>

					<div className="cities">
						<div className="cities__places-container container">
							<section className="cities__places places">
								<h2 className="visually-hidden">Places</h2>
								<b className="places__found">{offers.length} places to stay in {city}</b>

								<SortingType onChangeOption={this.handleSortOffers}/>

								<div className="cities__places-list places__list tabs__content">

									<CardList
										items={this.state.offers}
										onClick={this.handleClick}
										onMouseOver={this.handleMouseOver}
										onMouseLeave={this.handleMouseLeave}
									/>

								</div>
							</section>
							<div className="cities__right-section">
								<section className="cities_map map">

									<Map
										coords={cityCoord}
										items={offers}
										offerHover={this.state.hoverItem}
									/>

								</section>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

Main.propTypes = {
	items: PropTypes.array.isRequired,
	city: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	onCityClick: PropTypes.func.isRequired
};

export default Main;
