import {ICON_SIZE} from '../const';
import leaflet from 'leaflet';

export const getIndex = (items, city) => {

	for (let i = 0; i < items.length; i++) {

		if (items[i].city.toLowerCase() === city.toLowerCase()) return i;
	}
};

export const getCityCoord = (hotels, city) => {

	const index = getIndex(hotels, city);

	return hotels[index].coords;
};

export const getActiveIconParams = (width = ICON_SIZE, height = ICON_SIZE) => ({
	iconUrl: `/img/pin-active.svg`,
	iconSize: [width, height]
});

export const getIconParams = (width = ICON_SIZE, height = ICON_SIZE) => ({
	iconUrl: `/img/pin.svg`,
	iconSize: [width, height]
});

export const getCityOffer = (state, id, city) => {

	let cityOffers = state.hotels.filter((item) => item.city.toLowerCase() === city);
	let offer = cityOffers[0].offers.filter((it) => it.id === +id);

	return offer[0];
};

export const getCityOffers = (state, city) => {

	return state.hotels.filter((item) => item.city.toLowerCase() === city)[0].offers;
};

export const getNhoods = (offer, items, number) => {

	let arr = [];
	const from = leaflet.latLng(offer.coords);

	arr.push({
		offer: offer,
		length: 0
	});

	for (const it of items) {

		if (it.id !== offer.id) {

			let to = leaflet.latLng(it.coords);

			arr.push({
				offer: it,
				length: from.distanceTo(to)
			});
		}
	}
	arr = arr.sort((prev, next) => prev.length - next.length);

	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].offer;
	}

	return arr.slice(1, number + 1);
};

export const getLS = (name) => {
	return JSON.parse(localStorage.getItem(name));
};

export const setLS = (name, arr) => {
	return localStorage.setItem(name, JSON.stringify(arr));
};
