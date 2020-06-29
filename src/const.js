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
