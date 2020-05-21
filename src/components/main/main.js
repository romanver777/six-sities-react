import React from 'react';
import PropTypes from 'prop-types';

import SortingType from '../sorting-type/sorting-type';
import CardList from '../card-list/card-list';
import CitiesList from '../cities-list/cities-list';
import CitiesNoPlaces from '../cities-no-places/cities-no-places';
import Map from '../map/map';
import {getIndex} from '../../helpers/helpers';

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			hoverItem: null,
			offers: [],
		};
	}

	componentDidMount() {
		// this.setState({offers: this.props.cityOffers});
	}

	componentDidUpdate(prevProps) {

		if (prevProps.city !== this.props.city) {

			this.handleSortOffers('Popular');
		}
	}

	static getDerivedStateFromProps(props, state) {

		if(props.cityOffer !== state.offers) {

			return {
				...state,
				offers: props.cityOffers
			}
		}

		return null;
	}

	handleClick = (item) => this.props.onClick(item);

	handleMouseOver = (item) => this.setState((prevState) => {

		return (prevState.hoverItem !== item) ? {hoverItem: item} : null;
	});

	handleMouseLeave = () => this.setState({hoverItem: null});

	handleCityClick = (city) => this.props.onCityClick(city);

	handleSortOffers = (option) => {

		let {offers} = this.state;

		switch (option) {

			case `Popular`:
				offers.sort((a, b) => {

					if (a.id > b.id) return 1;
					if (a.id < b.id) return -1;
					return 0;
				});
				break;

			case `Price: low to high`:
				offers.sort((a, b) => {

					if (a.price > b.price) return 1;
					if (a.price < b.price) return -1;
					return 0;
				});
				break;

			case `Price: high to low`:
				offers.sort((a, b) => {

					if (a.price < b.price) return 1;
					if (a.price > b.price) return -1;
					return 0;
				});
				break;

			case `Top rated first`:
				offers.sort((a, b) => {

					if (a.rating < b.rating) return 1;
					if (a.rating > b.rating) return -1;
					return 0;
				});
				break;

			default: return null;
		}

		this.setState({offers});
	};

	render() {

		const {hotels, city, currentUser} = this.props;
		const index = getIndex(hotels, city);
		const offers = hotels[index].offers;
		const cityCoord = hotels[index].coords;

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

											{currentUser ? <span className="header__user-name user__name">{currentUser.userName}</span>
												: <span className="header__login">Sign in</span>
											}

										</button>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>

				<main className={offers.length ? 'page__main page__main--index'
																			 : 'page__main page__main--index page__main--index-empty'}>

					<CitiesList items={hotels}
											city={city}
											onClick={this.handleCityClick}
					/>

					<div className="cities">

						{offers.length ?
							<div className="cities__places-container container">
								<section className="cities__places places">
									<h2 className="visually-hidden">Places</h2>
									<b className="places__found">{offers.length} places to stay in {city}</b>

									<SortingType
										key={city}
										onChangeOption={this.handleSortOffers}
									/>

									<div className="cities__places-list places__list tabs__content">

										<CardList
											items={offers}
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

							: <CitiesNoPlaces city={city}/>
						}
					</div>
				</main>
			</div>
		);
	}
}

Main.propTypes = {
	hotels: PropTypes.array.isRequired,
	city: PropTypes.string.isRequired,
	currentUser: PropTypes.object,
	onClick: PropTypes.func.isRequired,
	onCityClick: PropTypes.func.isRequired
};

export default Main;
