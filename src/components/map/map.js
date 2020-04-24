import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends React.PureComponent {

	constructor (props) {
		super (props);

		this.items = props.items;
	}

	initMap = (items, offer) => {

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

		for (let i = 0; i < items.length; i++) {

			const offerCoord = items[i].coords;

			if (offer) {

				(i < 1) ? icon = leaflet.icon({iconUrl: `img/pin-active.svg`,
																			 iconSize: [30, 30]})
								: icon = leaflet.icon({iconUrl: `img/pin.svg`,
																			 iconSize: [30, 30]});
			}

			leaflet
				.marker(offerCoord, {icon})
				.addTo(map);
		}
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

				if (it.id == nh.id) {

					arr.push(it);
				}
			}
		}
		if (arr.length > number + 1) arr = arr.slice(0, number);

		return arr;
	};

	componentDidMount () {

		const {offer} = this.props;

		if (offer) {

			const nhoods = this.getNhoods(offer, this.items);

			this.items = this.filterItems(nhoods, this.items);
		}
		this.initMap(this.items, offer);
	}

	render () {

		const {items} = this.props;

		return <div id="map"></div>
	}
}

Map.propTypes = {
	items: PropTypes.array.isRequired
};

export default Map;
