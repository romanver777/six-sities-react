import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import NeghbourhoodList from '../neighbourhood-list/neughbourhood-list';
import {getIndex} from '../../helpers/helpers';

class OfferProperty extends React.PureComponent{

	constructor (props) {
		super (props);

		this.state = {
			neighbourhoods: [],
			hoverItem: null,
			offer: this.props.offer
		}
	}

	handleClick = (item) => this.setState({offer: item});

	handleMouseOver = (item) => this.setState((prevState) => {

		return (prevState.hoverItem !== item) ? {hoverItem: item} : null;
	});

	handleMouseLeave = () => this.setState({hoverItem: null});

	getNhoods = (offer, items, number) => {

		let arr = [];
		const from = leaflet.latLng(offer.coords);

		arr.push({
			offer: offer,
			length: 0
		});

		for (const it of items) {

			if (it.id !== offer.id) {

				let to = leaflet.latLng(it.coords);

				arr.push({
					offer: it,
					length: from.distanceTo(to)
				});
			}
		}
		arr = arr.sort((prev, next) => prev.length - next.length);

		for (let i = 0; i < arr.length; i++) {
			arr[i] = arr[i].offer;
		}

		return arr.slice(1, number + 1);
	};

	render () {

		const {items, offers, city} = this.props;
		const {offer} = this.state;

		const numberNhoods = 3;
		const neighbourhoods = this.getNhoods(offer, offers, numberNhoods);

		const index = getIndex(items, city);
		const cityCoord = items[index].coords;

		return (
			<div className="page">
				<header className="header">
					<div className="container">
						<div className="header__wrapper">
							<div className="header__left">
								<button className="header__logo-link buttonLink">
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
				<main className="page__main page__main--property">
					<section className="property">
						<div className="property__gallery-container container">
							<div className="property__gallery">
								<div className="property__image-wrapper">
									<img className="property__image" src="img/room.jpg" alt="studio"/>
								</div>
								<div className="property__image-wrapper">
									<img className="property__image" src="img/apartment-01.jpg" alt="studio01"/>
								</div>
								<div className="property__image-wrapper">
									<img className="property__image" src="img/apartment-02.jpg" alt="studio02"/>
								</div>
								<div className="property__image-wrapper">
									<img className="property__image" src="img/apartment-03.jpg" alt="studio03"/>
								</div>
								<div className="property__image-wrapper">
									<img className="property__image" src="img/studio-01.jpg" alt="studio04"/>
								</div>
								<div className="property__image-wrapper">
									<img className="property__image" src="img/apartment-01.jpg" alt="studio05"/>
								</div>
							</div>
						</div>
						<div className="property__container container">
							<div className="property__wrapper">
								<div className="property__mark">
									<span>Premium</span>
								</div>
								<div className="property__name-wrapper">
									<h1 className="property__name">
										{offer.title}
									</h1>
									<button className="property__bookmark-button button" type="button">
										<svg className="property__bookmark-icon" width="31" height="33">
											<use xlinkHref="#icon-bookmark"/>
										</svg>
										<span className="visually-hidden">To bookmarks</span>
									</button>
								</div>
								<div className="property__rating rating">
									<div className="property__stars rating__stars">
										{/*<span style="width: 96%"></span>*/}
										<span className="visually-hidden">Rating</span>
									</div>
									<span className="property__rating-value rating__value">4.8</span>
								</div>
								<ul className="property__features">
									<li className="property__feature property__feature--entire">
										Entire place
									</li>
									<li className="property__feature property__feature--bedrooms">
										3 Bedrooms
									</li>
									<li className="property__feature property__feature--adults">
										Max 4 adults
									</li>
								</ul>
								<div className="property__price">
									<b className="property__price-value">&euro;120</b>
									<span className="property__price-text">&nbsp;night</span>
								</div>
								<div className="property__inside">
									<h2 className="property__inside-title">What&apos;s inside</h2>
									<ul className="property__inside-list">
										<li className="property__inside-item">
											Wi-Fi
										</li>
										<li className="property__inside-item">
											Washing machine
										</li>
										<li className="property__inside-item">
											Towels
										</li>
										<li className="property__inside-item">
											Heating
										</li>
										<li className="property__inside-item">
											Coffee machine
										</li>
										<li className="property__inside-item">
											Baby seat
										</li>
										<li className="property__inside-item">
											Kitchen
										</li>
										<li className="property__inside-item">
											Dishwasher
										</li>
										<li className="property__inside-item">
											Cabel TV
										</li>
										<li className="property__inside-item">
											Fridge
										</li>
									</ul>
								</div>
								<div className="property__host">
									<h2 className="property__host-title">Meet the host</h2>
									<div className="property__host-user user">
										<div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
											<img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74"
													 height="74" alt="Host avatar"/>
										</div>
										<span className="property__user-name">
    	                Angelina
    	              </span>
										<span className="property__user-status">
    	                Pro
    	              </span>
									</div>
									<div className="property__description">
										<p className="property__text">
											A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
											building is green and from 18th century.
										</p>
										<p className="property__text">
											An independent House, strategically located between Rembrand Square and National Opera, but where
											the bustle of the city comes to rest in this alley flowery and colorful.
										</p>
									</div>
								</div>
								<section className="property__reviews reviews">
									<h2 className="reviews__title">Reviews &middot; <span
										className="reviews__amount">{offer.reviews.length}</span></h2>

									<ReviewList reviews={offer.reviews}/>

									{/*<form className="reviews__form form" action="#" method="post">*/}
									{/*<label className="reviews__label form__label" htmlFor="review">Your review</label>*/}
									{/*<div className="reviews__rating-form form__rating">*/}
									{/*<input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio">*/}
									{/*<label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">*/}
									{/*<svg className="form__star-image" width="37" height="33">*/}
									{/*<use xlinkHref="#icon-star"/>*/}
									{/*</svg>*/}
									{/*</label>*/}

									{/*<input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>*/}
									{/*<label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">*/}
									{/*<svg className="form__star-image" width="37" height="33">*/}
									{/*<use xlinkHref="#icon-star"/>*/}
									{/*</svg>*/}
									{/*</label>*/}

									{/*<input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>*/}
									{/*<label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">*/}
									{/*<svg className="form__star-image" width="37" height="33">*/}
									{/*<use xlinkHref="#icon-star"/>*/}
									{/*</svg>*/}
									{/*</label>*/}

									{/*<input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>*/}
									{/*<label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">*/}
									{/*<svg className="form__star-image" width="37" height="33">*/}
									{/*<use xlinkHref="#icon-star"/>*/}
									{/*</svg>*/}
									{/*</label>*/}

									{/*<input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>*/}
									{/*<label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">*/}
									{/*<svg className="form__star-image" width="37" height="33">*/}
									{/*<use xlinkHref="#icon-star"/>*/}
									{/*</svg>*/}
									{/*</label>*/}
									{/*</div>*/}
									{/*<textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"/>*/}
									{/*<div className="reviews__button-wrapper">*/}
									{/*<p className="reviews__help">*/}
									{/*To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.*/}
									{/*</p>*/}
									{/*<button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>*/}
									{/*</div>*/}
									{/*</form>*/}
								</section>
							</div>
						</div>
						<section className="property_map map" style={{height: 579 + 'px', marginBottom: 50 + 'px'}}>

							<Map coords={cityCoord}
									 items={neighbourhoods}
									 offerHover={this.state.hoverItem}
									 offer={offer}
							/>

						</section>
					</section>
					<div className="container">
						<section className="near-places places">
							<h2 className="near-places__title">Other places in the neighbourhood</h2>
							<div className="near-places__list places__list">

								<NeghbourhoodList
									items={neighbourhoods}
									onClick={this.handleClick}
									onMouseOver={this.handleMouseOver}
									onMouseLeave={this.handleMouseLeave}
								/>

							</div>
						</section>
					</div>
				</main>
			</div>
		);
	}
}

OfferProperty.propTypes = {
	items: PropTypes.array.isRequired,
	city: PropTypes.string.isRequired,
	offer: PropTypes.object.isRequired,
	offers: PropTypes.array.isRequired,
	onCLick: PropTypes.func.isRequired,
};

export default OfferProperty;
