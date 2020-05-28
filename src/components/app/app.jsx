import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../../history';

import {ActionCreator, Operation} from '../../reducer';
import {getIndex} from '../../helpers/helpers';
import {APP_ROUTE} from '../../const';

import Main from '../main/main';
import OfferProperty from '../offer-property/offer-property';
import SignIn from '../sign-in/sign-in';

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
			activeOfferId: {},
			isHotelsLoaded: false,
    }
  }

  componentDidUpdate(prevProps) {

		if (prevProps.hotels !== this.props.hotels) {
			this.setState({isHotelsLoaded: true});
		}
  }

	handleReload = () => {

		this.setState((prevState) => ({
			isHotelsLoaded: !prevState.isHotelsLoaded,
		}), () => window.location.reload());
	};

	handleOfferClick = (item) => {

		return this.setState({activeOfferId: item.id}, () => this.props.onClick(item));
	};

  render() {

		const {hotels, city, currentUser, isAuthorizationRequired, cityClick, login} = this.props;

		let cityOffers;

		if (this.state.isHotelsLoaded) {

			cityOffers = hotels[getIndex(hotels, city)].offers;
		}

		return (
			this.state.isHotelsLoaded
				? <Router history={history}>
						<Switch>
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
									onSubmit={login}
									onCityClick={cityClick}
									currentUser={currentUser}
									isAuthRequired={isAuthorizationRequired}
								/>
							</Route>
							<Route path={APP_ROUTE.OFFER}
										 render={(props) => <OfferProperty {...props}/>}
							>

							</Route>
						</Switch>
					</Router>
				: `Loading hotels...`
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
	isAuthorizationRequired: state.isAuthorizationRequired,
	currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({

	reloadAll: () => dispatch(Operation.reloadAll()),
	cityClick: (city) => dispatch(ActionCreator.setCity(city)),
	onClick: (offer) => dispatch(ActionCreator.setCurrentOffer(offer)),
	login: (authData) => dispatch(Operation.login(authData)),
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
