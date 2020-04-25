import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import OfferProperty from '../offer-property/offer-property';

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      screen: -1,
    }
  }

  static getScreen = (screen, items, onClick) => {
    if(screen < 0) {
			return <Main
        items={items}
        onClick={onClick}
      />
    }

    return <OfferProperty items={items}
                          offer={items[screen]}
    />
  };

  render() {

    const {items} = this.props;

    return App.getScreen(this.state.screen, items, (item) => {

      this.setState((prevState) => (
        {screen: item.id}
			));
    });
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired
};

export default App;
