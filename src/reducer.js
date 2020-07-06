const initialState = {
	city: ``,
	hotels: [],
	currentOffer: {},
	favoriteList: [],
	isAuthorizationRequired: true,
	currentUser: {},
	reviews: [],
};

const getFavoriteIndexFromList = (offer, favoriteList) => {

	if (!favoriteList.length) return -1;

	return favoriteList.findIndex((item) => item.hotelId === offer.hotelId);
};

const getFilteredLocalList = (key, responseEmail) => {
	let filtered;
	let favoritesLocal = JSON.parse(localStorage.getItem(key));

	if (favoritesLocal) {
		filtered = favoritesLocal.filter((it) => it.currentUser.email === responseEmail);
	}

	return filtered;
};

const ActionType = {
	SET_CITY: `SET_CITY`,
	LOAD_HOTELS: `LOAD_HOTELS`,
	SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
	REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
	SET_CURRENT_USER: `SET_CURRENT_USER`,
	RELOAD_ALL: `RELOAD_ALL`,
	TOGGLE_FAVORITE: `TOGGLE_FAVORITE`,
	ADD_FAVORITE: `ADD_FAVORITE`,
	REMOVE_FAVORITE: `REMOVE_FAVORITE`,
	SET_FAVORITES: `SET_FAVORITES`,
	SET_REVIEWS: `SET_REVIEWS`,
};

const ActionCreator = {

	setCity: (city) => ({
		type: ActionType.SET_CITY,
		payload: city,
	}),

	loadHotels: (hotels) => ({
		type: ActionType.LOAD_HOTELS,
		payload: hotels,
	}),

	setCurrentOffer: (currentOffer) => ({
		type: ActionType.SET_CURRENT_OFFER,
		payload: currentOffer,
	}),

	requireAuthorization: (status) => ({
		type: ActionType.REQUIRE_AUTHORIZATION,
		payload: status,
	}),

	setCurrentUser: (dataUser) => ({
		type: ActionType.SET_CURRENT_USER,
		payload: dataUser,
	}),

	reloadAll: () => ({
		type: ActionType.RELOAD_ALL,
		payload: null,
	}),

	toggleFavorite: (offer, favoriteList) => {

		const offerInd = getFavoriteIndexFromList(offer, favoriteList);

		if (offerInd < 0) {
			return {
				type: `ADD_FAVORITE`,
				payload: offer,
			}
		}
		return {
			type: `REMOVE_FAVORITE`,
			payload: offerInd,
		}
	},

	setFavorites: (favoriteList) => ({
		type: `SET_FAVORITES`,
		payload: favoriteList,
	}),

	setReviews: (reviews) => ({
		type: `SET_REVIEWS`,
		payload: reviews,
	}),
};


const reducer = (state = initialState, action) => {

	switch (action.type) {

		case ActionType.SET_CITY:
			return Object.assign({}, state, {
				city: action.payload,
			});

		case ActionType.LOAD_HOTELS:
			return Object.assign({}, state, {
				hotels: action.payload,
			});

		case ActionType.SET_CURRENT_OFFER:
			return Object.assign({}, state, {
				currentOffer: action.payload,
			});

		case ActionType.REQUIRE_AUTHORIZATION:
			return Object.assign({}, state, {
				isAuthorizationRequired: action.payload,
			});

		case ActionType.SET_CURRENT_USER:
			return Object.assign({}, state, {
				currentUser: action.payload,
			});

		case ActionType.RELOAD_ALL:
			return Object.assign({}, state);

		case ActionType.ADD_FAVORITE:
			return Object.assign({}, state, {
				favoriteList: [...state.favoriteList, action.payload],
			});

		case ActionType.REMOVE_FAVORITE:

			let list = [...state.favoriteList];
			list.splice(action.payload, 1);

			return Object.assign({}, state, {
				favoriteList: list,
			});

		case ActionType.SET_FAVORITES:
			return Object.assign({}, state, {
				favoriteList: action.payload,
			});

		case ActionType.SET_REVIEWS:
			return {
				...state,
				reviews: action.payload
			};

		default: return state;
	}
};

const Operation = {

	loadHotels: () => (dispatch, getState, api) => {

		return api.get(`https://run.mocky.io/v3/c3ca7b37-068d-481a-a3f9-b4da256a5f3d`)
			.then((response) => {
				dispatch(ActionCreator.loadHotels(response.data));
			});
	},

	reloadAll: () => (dispatch) => {

		dispatch(Operation.loadHotels())
			.then(() => {
				dispatch(ActionCreator.setCity('Paris'));
			});

		return null;
	},

	checkAuth: () => (dispatch, getState, api) => {

		return api
			.get(`/login`)
			.then((response) => {
				if (response.data) {
					dispatch(ActionCreator.setCurrentUser(response.data));
					dispatch(ActionCreator.requireAuthorization(false));

					const filtered = getFilteredLocalList('favorites', response.data.email);

					if (filtered) dispatch(ActionCreator.setFavorites(filtered[0].favoriteList));
				}
			})
			.catch(() => {});
	},

	login: (authData) => (dispatch, getState, api) => {

		return api.post(`/login`, authData)
			.then((response) => {
				if (response.data) {
					dispatch(ActionCreator.setCurrentUser(response.data));
					dispatch(ActionCreator.requireAuthorization(false));

					const filtered = getFilteredLocalList('favorites', response.data.email);

					if (filtered) dispatch(ActionCreator.setFavorites(filtered[0].favoriteList));
				}
			})
			.then(() => window.history.back())
			.catch(() => {});
	},

	getReviews: (id) => (dispatch, getState, api) => {

		return api.get(`/comments/${id}`)
			.then((response) => {
				if(response.data) dispatch(ActionCreator.setReviews(response.data));
			})
	},

		// sendFormReview: (formData, city, hotel, user) => (dispatch, getState, api) => {
	//
	// 	return api.post(`http://www.mocky.io/v2/5ec6d8392f00003500426e1f`, {
	// 		city,
	// 		hotel,
	// 		user,
	// 		rating: formData.rating,
	// 		review: formData.review,
	// 	});
	// },
};
export {
	ActionCreator,
	reducer,
	Operation,
}
