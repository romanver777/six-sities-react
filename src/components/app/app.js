import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';
import {getIndex} from '../../helpers/helpers';

import Main from '../main/main';
import OfferProperty from '../offer-property/offer-property';

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      screen: -1,
			isHotelsLoaded: false,
    }
  }

  componentDidUpdate(prevProps) {

		if (prevProps.hotels !== this.props.hotels) {

			this.setState({isHotelsLoaded: true});
		}
  }

  static _getScreen = (screen, props, onClick) => {

		const cityOffers = props.hotels[getIndex(props.hotels, props.city)].offers;

    if(screen < 0) {

			return <Main
        hotels={props.hotels}
        city={props.city}
        cityOffers={cityOffers}
        onClick={onClick}
        onCityClick={props.cityClick}
      />
    }

    const cityOffer = cityOffers[screen];

    return <OfferProperty hotels={props.hotels}
                          city={props.city}
                          cityOffer={cityOffer}
                          cityOffers={cityOffers}
                          onCLick={onClick}
    />
  };

  render() {

    return this.state.isHotelsLoaded
      ? App._getScreen(this.state.screen, this.props, (item) => {
          this.setState( {screen: item.id} );
      })
      : `Loading hotels...`
  }
}

App.propTypes = {
  hotels: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  cityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  hotels: state.hotels,
});

const mapDispatchToProps = (dispatch) => ({

	cityClick: (city) => dispatch(ActionCreator.setCity(city))
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
