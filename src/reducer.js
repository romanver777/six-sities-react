const initialState = {
	city: `Paris`,
	hotels: [],
	isAuthorizationRequired: true,
	currentUser: {},
};

const ActionType = {
	SET_CITY: `SET_CITY`,
	LOAD_HOTELS: `LOAD_HOTELS`,
	REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
	SET_CURRENT_USER: `SET_CURRENT_USER`,
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

	requireAuthorization: (status) => ({
		type: ActionType.REQUIRE_AUTHORIZATION,
		payload: status,
	}),

	setCurrentUser: (dataUser) => ({
		type: ActionType.SET_CURRENT_USER,
		payload: dataUser
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

		case ActionType.REQUIRE_AUTHORIZATION:
			return Object.assign({}, state, {
				isAuthorizationRequired: action.payload,
			});

		case ActionType.SET_CURRENT_USER:
			return Object.assign({}, state, {
				currentUser: action.payload,
			});

		default: return state;
	}
};

const Operation = {

	loadHotels: () => (dispatch, getState, api) => {

		return api.get(`http://www.mocky.io/v2/5ec4f1df2f00009200dc2d00`)
			.then((response) => {
				dispatch(ActionCreator.loadHotels(response.data));
			});
	},

	checkAuth: () => (dispatch, getState, api) => {

		return api.get(`https://es31-server.appspot.com/six-cities/login`)
			.then(() => {
				dispatch(ActionCreator.requireAuthorization(true));
			});
	},

	login: (authData) => (dispatch, getState, api) => {

		return api.post(`http://www.mocky.io/v2/5ec68ea13200007900d74f59`, {
			login: authData.login,
			password: authData.password,
		})
			.then((response) => {
				dispatch(ActionCreator.requireAuthorization(false));
				dispatch(ActionCreator.setCurrentUser(response.data));
			});
	},
};
export {
	ActionCreator,
	reducer,
	Operation,
}
