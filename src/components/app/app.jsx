import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';

import {ActionCreator, Operation} from '../../reducer';
import {getIndex, getLS, setLS} from '../../helpers/helpers';
import {APP_ROUTE} from '../../const';

import Main from '../main/main';
import OfferProperty from '../offer-property/offer-property';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Loader from '../loader/loader';
import ErrorPage from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
			activeOfferId: {},
			isHotelsLoaded: false,
    }
  }

  componentDidUpdate(prevProps) {

  	const {hotels, currentUser, favoriteList} = this.props;

		if (prevProps.hotels !== hotels) {
			this.setState({isHotelsLoaded: true});
		}

		if (currentUser && prevProps.favoriteList !== favoriteList) {

			let userList = [];
			let filtered;
			const data = {currentUser, favoriteList};

			let favoritesLocal = getLS('favorites');

			if (favoritesLocal) {

				filtered = favoritesLocal.filter((it) => it.currentUser.email !== currentUser.email);

				filtered.push(data);
				setLS('favorites', filtered);

			} else {

				userList.push(data);
				setLS('favorites', userList);

			}
		}
  }

	handleReload = () => {

		this.setState((prevState) => ({
			isHotelsLoaded: !prevState.isHotelsLoaded,
		}), () => window.location.reload());
	};

	handleOfferClick = (item) => {

		return this.setState({activeOfferId: item.id});
	};

  render() {

		const {hotels, city, currentUser, isAuthorizationRequired, favoriteList, cityClick, login} = this.props;

		let cityOffers;

		if (this.state.isHotelsLoaded && city) {

			cityOffers = hotels[getIndex(hotels, city)].offers;
		}

		return (
			this.state.isHotelsLoaded && city
				? <Switch>
							<Route exact path={APP_ROUTE.ROOT}>
								<Main
									{...this.props}
									cityOffers={cityOffers}
									onClick={this.handleOfferClick}
									onCityClick={cityClick}
									reload={this.handleReload}
								/>
							</Route>
							<Route exact path={APP_ROUTE.LOGIN}>
								<SignIn
									hotels={hotels}
									onSubmit={login}
									onCityClick={cityClick}
									currentUser={currentUser}
									isAuthRequired={isAuthorizationRequired}
								/>
							</Route>
							<PrivateRoute exact path={APP_ROUTE.FAVORITES}
														component={Favorites}
														isAuthRequired={isAuthorizationRequired}
														favoriteList={favoriteList}
														currentUser={currentUser}/>
							<Route path={APP_ROUTE.OFFER}
										 render={(props) => <OfferProperty {...props}/>}
							>
							</Route>
							<Route path={APP_ROUTE.ERROR} component={ErrorPage}/>
						</Switch>
				: <Loader/>
		);
  }
}

App.propTypes = {
  hotels: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  cityClick: PropTypes.func.isRequired,
	isAuthorizationRequires: PropTypes.bool,
	currentUser: PropTypes.object,
	login: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  hotels: state.hotels,
	currentOffer: state.currentOffer,
	favoriteList: state.favoriteList,
	isAuthorizationRequired: state.isAuthorizationRequired,
	currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

	reloadAll: () => dispatch(Operation.reloadAll()),
	cityClick: (city) => dispatch(ActionCreator.setCity(city)),
	onClick: (offer) => dispatch(ActionCreator.setCurrentOffer(offer)),
	login: (authData) => dispatch(Operation.login(authData)),
	setFavorites: (favoritesList) => dispatch(ActionCreator.setFavorites(favoritesList)),
	setCurrentUser: (currentUser) => dispatch(ActionCreator.setCurrentUser(currentUser)),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
