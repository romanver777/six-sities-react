import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';
import Main from '../main/main';
import OfferProperty from '../offer-property/offer-property';
import {getIndex} from '../../helpers/helpers';

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      screen: -1,
    }
  }

  static _getScreen = (screen, props, onClick) => {

    if(screen < 0) {

			return <Main
        items={props.items}
        city={props.city}
        onClick={onClick}
        onCityClick={props.cityClick}
      />
    }

    const offers = props.items[getIndex(props.items, props.city)].offers;
    const offer = props.items[getIndex(props.items, props.city)].offers[screen];

    return <OfferProperty items={props.items}
                          city={props.city}
                          offer={offer}
                          offers={offers}
                          onCLick={onClick}
    />
  };

  render() {

    return App._getScreen(this.state.screen, this.props, (item) => {

			this.setState( {screen: item.id} );
		});
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  cityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({

	cityClick: (city) => dispatch(ActionCreator.setCity(city))
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
