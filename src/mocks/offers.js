const offers = [
	{
		city: `Paris`,
		coords: [48.8534, 2.3488],
		offers: [
			{
				id: 0,
				title: `Paris - Beautiful & luxurious apartment at great location`,
				type: `Apartment`,
				img: `img/apartment-01.jpg`,
				price: 120,
				priceText: `night`,
				rating: 4.5,
				mark: `Premium`,
				coords: [48.878203, 2.369348],
				reviews: [
					{
						id: 0,
						name: 'Max',
						ava: 'img/avatar-max.jpg',
						text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
						rating: 4,
						dateTime: '2020-01-01',
						date: 'January 2020'
					},
					{
						id: 1,
						name: 'Sarah',
						ava: 'img/avatar.svg',
						text: 'Good hotel, comfy bed, friendly staff, good location and price.',
						rating: 4,
						dateTime: '2019-12-27',
						date: 'December 2019'
					},
					{
						id: 2,
						name: 'Paul',
						ava: 'img/avatar.svg',
						text: 'Staff at the Hotel were very friendly. On check - in the member of staff noticed from the date on my passport that I was celebrating my Birthday the following day. On my Birthday I was presented with a card and a complimentary bottle of wine.',
						rating: 5,
						dateTime: '2019-04-24',
						date: 'April 2019'
					}
				]
			},
			{
				id: 1,
				title: `Wood and stone place`,
				type: `Private room`,
				img: `img/room.jpg`,
				price: 80,
				priceText: `night`,
				rating: 5,
				mark: ``,
				coords: [48.848889, 2.315804],
				reviews: [
					{
						id: 0,
						name: 'Shaun',
						ava: 'img/avatar.svg',
						text: 'Excellent location, well laid out rooms and good service and very clean, Excellent value. I have stayed there before and will stay again. It is not the fanciest of hotels but is more than sufficient for most business needs',
						rating: 4.5,
						dateTime: '2019-12-19',
						date: 'Desember 2019'
					},
					{
						id: 1,
						name: 'Amber',
						ava: 'img/avatar-angelina.jpg',
						text: 'The hotel is really central in Amsterdam. The tram, should you need it is right outside the door. If you leave the hotel by the front entrance and walk forward two minutes you’ll be in a great shopping street. It has loads of clothes shops and little cheese and sweet shops. The man who greeted us on Friday (he wore a red sweater and had dark hair.) was so friendly and very informative about the different attractions on offer.',
						rating: 4,
						dateTime: '2019-12-07',
						date: 'December 2019'
					}
				]
			},
			{
				id: 2,
				title: `Canal View Prinsengracht`,
				type: `Apartment`,
				img: `img/apartment-02.jpg`,
				price: 132,
				priceText: `night`,
				rating: 4,
				mark: ``,
				coords: [48.832589, 2.359138],
				reviews: [
					{
						id: 0,
						name: 'Shaun',
						ava: 'img/avatar-max.jpg',
						text: 'Excellent location, well laid out rooms and good service and very clean, Excellent value. I have stayed there before and will stay again. It is not the fanciest of hotels but is more than sufficient for most business needs',
						rating: 4,
						dateTime: '2019-12-19',
						date: 'Desember 2019'
					},
					{
						id: 1,
						name: 'Vignesh',
						ava: 'img/avatar.svg',
						text: 'The hotel is really central in Amsterdam. The tram, should you need it is right outside the door. If you leave the hotel by the front entrance and walk forward two minutes you’ll be in a great shopping street. It has loads of clothes shops and little cheese and sweet shops. The man who greeted us on Friday (he wore a red sweater and had dark hair.) was so friendly and very informative about the different attractions on offer.',
						rating: 4,
						dateTime: '2019-12-07',
						date: 'December 2019'
					}
				]
			},
		]
	},
	{
		city: `Cologne`,
		coords: [50.9333, 6.95],
		offers: []
	},
	{
		city: `Brussels`,
		coords: [50.8504, 4.34878],
		offers: []
	},
	{
		city: `Amsterdam`,
		coords: [52.374, 4.88969],
		offers: [
			{
				id: 0,
				title: `Amsterdam - Beautiful & luxurious apartment at great location`,
				type: `Apartment`,
				img: `img/apartment-01.jpg`,
				price: 120,
				priceText: `night`,
				rating: 5,
				mark: `Premium`,
				coords: [52.3909553943508, 4.85309666406198],
				reviews: [
					{
						id: 0,
						name: 'Max',
						ava: 'img/avatar-max.jpg',
						text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
						rating: 4,
						dateTime: '2020-01-01',
						date: 'January 2020'
					},
					{
						id: 1,
						name: 'Sarah',
						ava: 'img/avatar.svg',
						text: 'Good hotel, comfy bed, friendly staff, good location and price.',
						rating: 4,
						dateTime: '2019-12-27',
						date: 'December 2019'
					},
					{
						id: 2,
						name: 'Paul',
						ava: 'img/avatar.svg',
						text: 'Staff at the Hotel were very friendly. On check - in the member of staff noticed from the date on my passport that I was celebrating my Birthday the following day. On my Birthday I was presented with a card and a complimentary bottle of wine.',
						rating: 5,
						dateTime: '2019-04-24',
						date: 'April 2019'
					}
				]
			},
			{
				id: 1,
				title: `Wood and stone place`,
				type: `Private room`,
				img: `img/room.jpg`,
				price: 80,
				priceText: `night`,
				rating: 5,
				mark: ``,
				coords: [52.369553943508, 4.85309666406198],
				reviews: [
					{
						id: 0,
						name: 'Shaun',
						ava: 'img/avatar.svg',
						text: 'Excellent location, well laid out rooms and good service and very clean, Excellent value. I have stayed there before and will stay again. It is not the fanciest of hotels but is more than sufficient for most business needs',
						rating: 4.5,
						dateTime: '2019-12-19',
						date: 'Desember 2019'
					},
					{
						id: 1,
						name: 'Amber',
						ava: 'img/avatar-angelina.jpg',
						text: 'The hotel is really central in Amsterdam. The tram, should you need it is right outside the door. If you leave the hotel by the front entrance and walk forward two minutes you’ll be in a great shopping street. It has loads of clothes shops and little cheese and sweet shops. The man who greeted us on Friday (he wore a red sweater and had dark hair.) was so friendly and very informative about the different attractions on offer.',
						rating: 4,
						dateTime: '2019-12-07',
						date: 'December 2019'
					}
				]
			},
			{
				id: 2,
				title: `Canal View Prinsengracht`,
				type: `Apartment`,
				img: `img/apartment-02.jpg`,
				price: 132,
				priceText: `night`,
				rating: 5,
				mark: ``,
				coords: [52.3909553943508, 4.929309666406198],
				reviews: [
					{
						id: 0,
						name: 'Shaun',
						ava: 'img/avatar-max.jpg',
						text: 'Excellent location, well laid out rooms and good service and very clean, Excellent value. I have stayed there before and will stay again. It is not the fanciest of hotels but is more than sufficient for most business needs',
						rating: 4,
						dateTime: '2019-12-19',
						date: 'Desember 2019'
					},
					{
						id: 1,
						name: 'Vignesh',
						ava: 'img/avatar.svg',
						text: 'The hotel is really central in Amsterdam. The tram, should you need it is right outside the door. If you leave the hotel by the front entrance and walk forward two minutes you’ll be in a great shopping street. It has loads of clothes shops and little cheese and sweet shops. The man who greeted us on Friday (he wore a red sweater and had dark hair.) was so friendly and very informative about the different attractions on offer.',
						rating: 4,
						dateTime: '2019-12-07',
						date: 'December 2019'
					}
				]
			},
			{
				id: 3,
				title: `Nice, cozy, warm big bed apartment`,
				type: `Apartment`,
				img: `img/apartment-03.jpg`,
				price: 180,
				priceText: `night`,
				rating: 5,
				mark: `Premium`,
				coords: [52.3809553943508, 4.939309666406198],
				reviews: [
					{
						id: 0,
						name: 'Shaun',
						ava: 'img/avatar.svg',
						text: 'Excellent location, well laid out rooms and good service and very clean, Excellent value. I have stayed there before and will stay again. It is not the fanciest of hotels but is more than sufficient for most business needs',
						rating: 4,
						dateTime: '2019-12-19',
						date: 'Desember 2019'
					},
					{
						id: 1,
						name: 'Vignesh',
						ava: 'img/avatar.svg',
						text: 'The hotel is really central in Amsterdam. The tram, should you need it is right outside the door. If you leave the hotel by the front entrance and walk forward two minutes you’ll be in a great shopping street. It has loads of clothes shops and little cheese and sweet shops. The man who greeted us on Friday (he wore a red sweater and had dark hair.) was so friendly and very informative about the different attractions on offer.',
						rating: 4,
						dateTime: '2019-12-07',
						date: 'December 2019'
					},
					{
						id: 2,
						name: 'Mary',
						ava: 'img/avatar-angelina.jpg',
						text: 'Staff at the Hotel were very friendly. On check - in the member of staff noticed from the date on my passport that I was celebrating my Birthday the following day. On my Birthday I was presented with a card and a complimentary bottle of wine.',
						rating: 5,
						dateTime: '2019-04-24',
						date: 'April 2019'
					}
				]
			},
		]
	},
	{
		city: `Hamburg`,
		coords: [53.5753, 10.0153],
		offers: []
	},
	{
		city: `Dusseldorf`,
		coords: [51.2217, 6.77616],
		offers: [
			{
				id: 0,
				title: `Dusseldorf - Beautiful & luxurious apartment at great location`,
				type: `Apartment`,
				img: `img/apartment-01.jpg`,
				price: 120,
				priceText: `night`,
				rating: 5,
				mark: `Premium`,
				coords: [51.210001, 6.782941],
				reviews: [
					{
						id: 0,
						name: 'Max',
						ava: 'img/avatar-max.jpg',
						text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
						rating: 4,
						dateTime: '2020-01-01',
						date: 'January 2020'
					},
					{
						id: 1,
						name: 'Sarah',
						ava: 'img/avatar.svg',
						text: 'Good hotel, comfy bed, friendly staff, good location and price.',
						rating: 4,
						dateTime: '2019-12-27',
						date: 'December 2019'
					},
					{
						id: 2,
						name: 'Paul',
						ava: 'img/avatar.svg',
						text: 'Staff at the Hotel were very friendly. On check - in the member of staff noticed from the date on my passport that I was celebrating my Birthday the following day. On my Birthday I was presented with a card and a complimentary bottle of wine.',
						rating: 5,
						dateTime: '2019-04-24',
						date: 'April 2019'
					}
				]
			},
			{
				id: 1,
				title: `Wood and stone place`,
				type: `Private room`,
				img: `img/room.jpg`,
				price: 80,
				priceText: `night`,
				rating: 5,
				mark: ``,
				coords: [51.217504, 6.764210],
				reviews: [
					{
						id: 0,
						name: 'Shaun',
						ava: 'img/avatar.svg',
						text: 'Excellent location, well laid out rooms and good service and very clean, Excellent value. I have stayed there before and will stay again. It is not the fanciest of hotels but is more than sufficient for most business needs',
						rating: 4.5,
						dateTime: '2019-12-19',
						date: 'Desember 2019'
					},
					{
						id: 1,
						name: 'Amber',
						ava: 'img/avatar-angelina.jpg',
						text: 'The hotel is really central in Amsterdam. The tram, should you need it is right outside the door. If you leave the hotel by the front entrance and walk forward two minutes you’ll be in a great shopping street. It has loads of clothes shops and little cheese and sweet shops. The man who greeted us on Friday (he wore a red sweater and had dark hair.) was so friendly and very informative about the different attractions on offer.',
						rating: 4,
						dateTime: '2019-12-07',
						date: 'December 2019'
					}
				]
			},
			{
				id: 2,
				title: `Canal View Prinsengracht`,
				type: `Apartment`,
				img: `img/apartment-02.jpg`,
				price: 132,
				priceText: `night`,
				rating: 5,
				mark: ``,
				coords: [51.220466, 6.778116],
				reviews: [
					{
						id: 0,
						name: 'Shaun',
						ava: 'img/avatar-max.jpg',
						text: 'Excellent location, well laid out rooms and good service and very clean, Excellent value. I have stayed there before and will stay again. It is not the fanciest of hotels but is more than sufficient for most business needs',
						rating: 4,
						dateTime: '2019-12-19',
						date: 'Desember 2019'
					},
					{
						id: 1,
						name: 'Vignesh',
						ava: 'img/avatar.svg',
						text: 'The hotel is really central in Amsterdam. The tram, should you need it is right outside the door. If you leave the hotel by the front entrance and walk forward two minutes you’ll be in a great shopping street. It has loads of clothes shops and little cheese and sweet shops. The man who greeted us on Friday (he wore a red sweater and had dark hair.) was so friendly and very informative about the different attractions on offer.',
						rating: 4,
						dateTime: '2019-12-07',
						date: 'December 2019'
					}
				]
			},
			{
				id: 3,
				title: `Nice, cozy, warm big bed apartment`,
				type: `Apartment`,
				img: `img/apartment-03.jpg`,
				price: 180,
				priceText: `night`,
				rating: 5,
				mark: `Premium`,
				coords: [51.219555, 6.787684],
				reviews: [
					{
						id: 0,
						name: 'Shaun',
						ava: 'img/avatar.svg',
						text: 'Excellent location, well laid out rooms and good service and very clean, Excellent value. I have stayed there before and will stay again. It is not the fanciest of hotels but is more than sufficient for most business needs',
						rating: 4,
						dateTime: '2019-12-19',
						date: 'Desember 2019'
					},
					{
						id: 1,
						name: 'Vignesh',
						ava: 'img/avatar.svg',
						text: 'The hotel is really central in Amsterdam. The tram, should you need it is right outside the door. If you leave the hotel by the front entrance and walk forward two minutes you’ll be in a great shopping street. It has loads of clothes shops and little cheese and sweet shops. The man who greeted us on Friday (he wore a red sweater and had dark hair.) was so friendly and very informative about the different attractions on offer.',
						rating: 4,
						dateTime: '2019-12-07',
						date: 'December 2019'
					},
					{
						id: 2,
						name: 'Mary',
						ava: 'img/avatar-angelina.jpg',
						text: 'Staff at the Hotel were very friendly. On check - in the member of staff noticed from the date on my passport that I was celebrating my Birthday the following day. On my Birthday I was presented with a card and a complimentary bottle of wine.',
						rating: 5,
						dateTime: '2019-04-24',
						date: 'April 2019'
					}
				]
			},
		]
	},
];

export default offers;
