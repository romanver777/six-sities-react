import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends React.PureComponent {

	constructor (props) {
		super (props);

		this.state = {
			map: null,
			markers: []
		}
	}

	initMap = (items, offer = null) => {

		const city = [52.38333, 4.9];
		let icon = leaflet.icon({
			iconUrl: `img/pin.svg`,
			iconSize: [30, 30]
		});
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

		if (offer) {

			icon = leaflet.icon(
				{
					iconUrl: `img/pin-active.svg`,
					iconSize: [30, 30]
				}
			);

			let mark = leaflet.marker(offer.coords, {icon});
			mark.addTo(map);
		}

		for (const item of items) {

			icon = leaflet.icon(
				{
					iconUrl: `img/pin.svg`,
					iconSize: [30, 30]
				}
			);

			let mark = leaflet.marker(item.coords, {icon});

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

	componentDidMount () {

		const {items, offer} = this.props;

		if (offer) {

			this.initMap(items, offer);

		}	else {

			this.initMap(items);
		}
	}

	changeIconsOnHover = (offer, markers) => {

		for (const it of markers) {

			let icon;
			let mark;

			if (offer) {
				if (it._latlng.lat === offer.coords[0] &&
					it._latlng.lng === offer.coords[1]) {

					icon = leaflet.icon({
						iconUrl: `img/pin.svg`,
						iconSize: [35, 35]
					});

				} else {

					icon = leaflet.icon({
						iconUrl: `img/pin.svg`,
						iconSize: [30, 30]
					});
				}
			} else {

				icon = leaflet.icon({
					iconUrl: `img/pin.svg`,
					iconSize: [30, 30]
				});
			}
			it.setIcon(icon);
		}


	};

	componentDidUpdate () {

		const {offerHover} = this.props;
		const {markers} = this.state;

			this.changeIconsOnHover(offerHover, markers);
	}

	render () {

		const {items} = this.props;

		return <div id="map" data={items}></div>
	}
}

Map.propTypes = {
	items: PropTypes.array.isRequired,
	offer: PropTypes.object,
};

export default Map;
