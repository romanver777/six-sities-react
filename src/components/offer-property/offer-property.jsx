import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator, Operation} from '../../reducer';

import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import NeghbourhoodList from '../neighbourhood-list/neughbourhood-list';
import FormComments from '../form-comments/form-comments';
import BookmarkButton from '../bookmark-button/bookmark-button';
import Header from '../header/header';
import ErrorPage from '../error-page/error-page';
import Mark from '../mark/mark';
import PropertyGallery from '../property-gallery/property-gallery';
import Rating from '../rating/rating';
import PropertyFeatures from '../property-features/property-features';
import PropertyInside from '../property-inside/property-inside';
import Price from '../price/price';
import PropertyHost from '../property-host/property-host';

import {getCityCoord, getCityOffer, getCityOffers, getNhoods} from '../../helpers/helpers';
import {BASE_URL, NUMBER_NEIBOURHOODS} from '../../const';

class OfferProperty extends React.PureComponent{

	constructor (props) {
		super (props);

		this.state = {
			hoverItem: null,
			offer: this.props.cityOffer
		}
	}

	componentDidMount() {

		const {cityOffer, getReviews} = this.props;

		document.title = `${cityOffer.city} - ${cityOffer.title}`;

		getReviews();

	}

	componentDidUpdate(prevProps) {

		if(prevProps.cityOffer !== this.props.cityOffer) {

			window.scrollTo(0,0);
			document.title = `${this.props.cityOffer.city} - ${this.props.cityOffer.title}`;
		}
	}

	handleClick = (item) => this.setState({offer: item}, () => this.props.onClick(item));

	handleMouseOver = (item) => this.setState((prevState) => {

		return (prevState.hoverItem !== item) ? {hoverItem: item} : null;
	});

	handleMouseLeave = () => this.setState({hoverItem: null});

	isFavorite = () => {

		const {cityOffer, favoriteList} = this.props;

		if (!favoriteList.length) return false;

		return favoriteList.findIndex((item) => item.hotelId === cityOffer.hotelId) >= 0;
	};

	handleBookmarkClick = (offer, small) => {
		const {isAuthorizationRequired, cityOffer, toggleBookmark, favoriteList} = this.props;

		if (isAuthorizationRequired) {

			window.location.assign(`${BASE_URL}/login`);

		} else{

			if (small) {
				toggleBookmark(offer, favoriteList);
			} else {
				toggleBookmark(cityOffer, favoriteList);
			}
		}
	};

	render () {

		const {hotels, cityOffers, city, currentUser, isAuthorizationRequired, favoriteList, reviews} = this.props;
		const {offer} = this.state;

		if (!offer) return <ErrorPage/>;

		const neighbourhoods = getNhoods(offer, cityOffers, NUMBER_NEIBOURHOODS);
		const cityCoord = getCityCoord(hotels, city);

		return (
			<div className="page">

				<Header
					isAuthorizationRequired={isAuthorizationRequired}
					currentUser={currentUser}
				/>

				<main className="page__main page__main--property">
					<section className="property">

						<PropertyGallery
							images={offer.images}
						/>

						<div className="property__container container">
							<div className="property__wrapper">

								<Mark
									isPremium={offer.is_premium}
									prefix="property"
								/>

								<div className="property__name-wrapper">
									<h1 className="property__name">
										{offer.title}
									</h1>

									<BookmarkButton
										isActive={this.isFavorite()}
										onBookmarkClick={(small) => this.handleBookmarkClick(offer, small)}
										small={false}
									/>

								</div>

								<Rating
									rating={offer.rating}
									prefix="property"
								/>

								<PropertyFeatures
									offer={offer}
								/>

								<Price
									price={offer.price}
									prefix="property"
								/>

								<PropertyInside
									goods={offer.goods}
								/>

								<PropertyHost
									offer={offer}
								/>

								<section className="property__reviews reviews">

									<ReviewList reviews={reviews}/>

									{!isAuthorizationRequired
										? <FormComments
												onSubmit={this.submitReviewForm}
										/>
										: null}

								</section>
							</div>
						</div>
						<section className="property_map map" style={{height: 579 + 'px', marginBottom: 50 + 'px'}}>

							<Map
								coords={cityCoord}
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
									city={city}
									items={neighbourhoods}
									favoriteList={favoriteList}
									onClick={this.handleClick}
									onMouseOver={this.handleMouseOver}
									onMouseLeave={this.handleMouseLeave}
									onBookmarkClick={this.handleBookmarkClick}
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
	hotels: PropTypes.array.isRequired,
	city: PropTypes.string.isRequired,
	cityOffer: PropTypes.object.isRequired,
	cityOffers: PropTypes.array.isRequired,
	currentUser: PropTypes.object,
	isAuthorizationRequired: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {

	const {id} = ownProps.match.params;

	return Object.assign({}, ownProps, {
		id,
		city: getCityOffer(state, id).city,
		hotels: state.hotels,
		cityOffer: getCityOffer(state, id),
		cityOffers: getCityOffers(state, id),
		favoriteList: state.favoriteList,
		isAuthorizationRequired: state.isAuthorizationRequired,
		currentUser: state.currentUser,
		reviews: state.reviews,
	});
};

const mapDispatchToProps = (dispatch, ownProps) => ({


	onClick: (offer) => dispatch(ActionCreator.setCurrentOffer(offer)),
	toggleBookmark: (cityOffer, favoriteList) => dispatch(ActionCreator.toggleFavorite(cityOffer, favoriteList)),
	getReviews: () => dispatch(Operation.getReviews(ownProps.match.params.id)),
});

export {OfferProperty}

export default connect(mapStateToProps, mapDispatchToProps)(OfferProperty);
