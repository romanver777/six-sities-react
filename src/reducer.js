const ActionCreator = {

	setCity: (city) => ({
		type: `SET_CITY`,
		payload: city,
	}),
};

const initialState = {
	city: `Paris`,
	offers: null,
};

const reducer = (state = initialState, action) => {

	switch (action.type) {
		case `SET_CITY`: return Object.assign({}, state, {
				city: action.payload
			});
	}

	return state;
};

export {
	ActionCreator,
	reducer
}
