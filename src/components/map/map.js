import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends React.PureComponent {

	constructor (props) {
		super (props);

		this.state = {
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

		for (let i = 0; i < items.length; i++) {

			const offerCoord = items[i].coords;

			if (offer) {

				(i < 1) ? icon = leaflet.icon({iconUrl: `img/pin-active.svg`,
																			 iconSize: [30, 30]})
								: icon = leaflet.icon({iconUrl: `img/pin.svg`,
																			 iconSize: [30, 30]});
			}

			markers.push(leaflet.marker(offerCoord, {icon}));

			leaflet.marker(offerCoord, {icon})
						 .addTo(map);
		}

		this.setState({
			markers: markers,
			map: map
		});
	};

	getNhoods = (offer, items) => {

		let arr = [];
		const from = leaflet.latLng(offer.coords);

		arr.push({
			id: offer.id,
			length: 0
		});

		for (const it of items) {

			if (it.id !== offer.id) {

				let to = leaflet.latLng(it.coords);

				arr.push({
					id: it.id,
					length: from.distanceTo(to)
				});
			}
		}
		return arr.sort((prev, next) => prev.length - next.length);
	};

	filterItems = (nhoods, items) => {

		let arr = [];
		const number = 3;

		for (const nh of nhoods) {

			for (const it of items) {

				if (it.id === nh.id) {

					arr.push(it);
				}
			}
		}
		if (arr.length > number + 1) arr = arr.slice(0, number);

		return arr;
	};

	componentDidMount () {

		const {items, offer} = this.props;

		if (offer) {

			const nhoods = this.getNhoods(offer, items);
			const its = this.filterItems(nhoods, items);

			this.initMap(its, offer);

		}	else {

			this.initMap(items);
		}
	}

	changeIconsOnHover = (item, markers) => {

		let newMarkers = [];

		for (const it of markers) {

			let icon;

			if (item) {
				if ( it._latlng.lat === item.coords[0] &&
						 it._latlng.lng === item.coords[1] ) {

					icon = leaflet.icon({
						iconUrl: `img/pin-active.svg`,
						iconSize: [30, 30]
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
			newMarkers.push(leaflet.marker(it._latlng, {icon}));

			leaflet
				.marker(it._latlng, {icon})
				.addTo(this.state.map);
		}
	};

	componentDidUpdate () {
		const {offer} = this.props;
		const {markers} = this.state;

		this.changeIconsOnHover(offer, markers);
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
