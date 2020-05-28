import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {getIconParams, getActiveIconParams} from '../../helpers/helpers';


class Map extends React.PureComponent {

	constructor (props) {
		super (props);

		this.state = {
			map: null,
			markers: []
		}
	}

	componentDidMount () {

		const {coords, items, offer} = this.props;

		if (offer) {

			this._initMap(coords, items, offer);
		}	else {

			this._initMap(coords, items);
		}
	}

	componentDidUpdate (prevProps) {

		const {coords, offerHover, items, offer} = this.props;
		const {markers} = this.state;

		if (prevProps.offer !== offer) {

			this.state.map.off();
			this.state.map.remove();
			this._initMap(coords, items, offer);
		}

		if (prevProps.coords !== coords) {

			this.state.map.off();
			this.state.map.remove();
			this._initMap(coords, items);
		}

		this._changeIconsOnHover(offerHover, markers);
	}

	_initMap = (cityCoord, items, offer = null) => {

		const city = cityCoord;
		let icon = leaflet.icon(getIconParams());
		const zoom = 12;
		const map = leaflet.map('map', {
			center: city,
			zoom: zoom,
			zoomControl: false,
			marker: true
		});

		map.setView(city, zoom);

		leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
		})
			.addTo(map);

		let markers = [];
		let mark;

		if (offer) {

			icon = leaflet.icon(getActiveIconParams());
			mark = leaflet.marker(offer.coords, {icon});
			mark.addTo(map);
		}

		for (const item of items) {

			icon = leaflet.icon(getIconParams());
			mark = leaflet.marker(item.coords, {icon});
			markers.push(mark);
		}

		for (const it of markers) {
			it.addTo(map);
		}

		this.setState({
			markers: markers,
			map: map
		});
	};

	_changeIconsOnHover = (offer, markers) => {

		for (const it of markers) {

			let icon;

			if (offer) {
				if (it._latlng.lat === offer.coords[0] &&
					it._latlng.lng === offer.coords[1]) {

					icon = leaflet.icon(getIconParams(35, 35));

				} else {

					icon = leaflet.icon(getIconParams());
				}
			} else {

				icon = leaflet.icon(getIconParams());
			}
			it.setIcon(icon);
		}
	};

	render () {

		const {items} = this.props;

		return (
			<React.Fragment>
				<div id="map"></div>
				<span style={{visibility: 'hidden'}} defaultValue={items}/>
			</React.Fragment>
		);
	}
}

Map.propTypes = {
	coords: PropTypes.array.isRequired,
	items: PropTypes.array.isRequired,
	offer: PropTypes.object,
	offerHover: PropTypes.object,
};

export default Map;
