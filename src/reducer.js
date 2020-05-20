const initialState = {
	city: `Paris`,
	hotels: [],
	isAuthorizationRequired: true,
};

const ActionType = {
	SET_CITY: `SET_CITY`,
	LOAD_HOTELS: `LOAD_HOTELS`,
	REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
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
	}

	return state;
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
			})
			.catch((error) => {
				throw error;
			});
	},

	login: (authData) => (dispatch, getState, api) => {

		return api.post(`https://es31-server.appspot.com/six-cities/login`, {
			email: authData.login,
			password: authData.password,
		})
			.then(() => {
				dispatch(ActionCreator.requireAuthorization(false));
			});
	},
};
export {
	ActionCreator,
	reducer,
	Operation,
}
