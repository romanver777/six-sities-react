export const BASE_URL = process.env.PUBLIC_URL;

export const APP_ROUTE = {
	LOGIN: BASE_URL + `/login`,
	ROOT: BASE_URL + `/`,
	OFFER: BASE_URL + `/offer/:id`,
	FAVORITES: BASE_URL +`/favorites`,
	ERROR: BASE_URL + `*`,
};

export const ICON_SIZE = 30;

export const NUMBER_NEIBOURHOODS = 3;

export const LOCATION_BUTTON_CLASS = {
	FAVORITES: `favorites__locations locations locations--current`,
	LOGIN: `locations locations--login locations--current`,
};

export const INPUT_LOGIN_CLASS = {
	ERROR: `input_error`,
	VALID: `input_valid`,
};
