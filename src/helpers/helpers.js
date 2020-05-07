const getIndex = (items, city) => {

	for (let i = 0; i < items.length; i++) {

		if (items[i].city === city) return i;
	}
};

export {
	getIndex
}
