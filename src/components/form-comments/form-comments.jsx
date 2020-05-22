import React from 'react';
import PropTypes from 'prop-types';

class FormComments extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			rating: '',
			review: '',
			isRatingValid: false,
			isReviewValid: false,
			disabled: true,
		}
	}

	validateForm = () => {

		this.setState({
			disabled: !(this.state.isRatingValid && this.state.isReviewValid),
		});
	};

	validateField = (name, value) => {

		let {isRatingValid, isReviewValid} = this.state;
		const minValue = 50;
		const maxValue = 200;

		switch (name) {

			case `rating`: isRatingValid = value.length > 0;
				break;
			case `review`: isReviewValid	= value.length >= minValue && value.length <= maxValue;
				break;

			default: break;
		}

		this.setState({
			isRatingValid,
			isReviewValid
		}, () => this.validateForm());
	};

	handleChange = (e) => {

		const {name, value} = e.target;

		this.setState({[name]: value}, () => this.validateField(name, value));
	};

	clearForm = (e) => {

		e.target.reset();

		this.setState({
			rating: '',
			review: '',
			isRatingValid: false,
			isReviewValid: false,
			disabled: true,
		});
	};

	handleSubmit = (e) => {

		const {onSubmit} = this.props;
		e.preventDefault();

		onSubmit({
			rating: this.state.rating,
			review: this.state.review,
		});

		this.clearForm(e);
	};

	render() {

		return (
			<form className="reviews__form form"
						action="#"
						method="post"
						onSubmit={this.handleSubmit}
			>
				<label className="reviews__label form__label" htmlFor="review">Your review</label>
				<div className="reviews__rating-form form__rating">
					<input className="form__rating-input visually-hidden"
								 name="rating"
								 value="5"
								 id="5-stars"
								 type="radio"
								 onChange={this.handleChange}
					/>
						<label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
							<svg className="form__star-image" width="37" height="33">
								<use xlinkHref="#icon-star"/>
							</svg>
						</label>

						<input className="form__rating-input visually-hidden"
									 name="rating"
									 value="4"
									 id="4-stars"
									 type="radio"
									 onChange={this.handleChange}
						/>
							<label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
								<svg className="form__star-image" width="37" height="33">
									<use xlinkHref="#icon-star"/>
								</svg>
							</label>

							<input className="form__rating-input visually-hidden"
										 name="rating"
										 value="3"
										 id="3-stars"
										 type="radio"
										 onChange={this.handleChange}
							/>
								<label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
									<svg className="form__star-image" width="37" height="33">
										<use xlinkHref="#icon-star"/>
									</svg>
								</label>

								<input className="form__rating-input visually-hidden"
											 name="rating"
											 value="2"
											 id="2-stars"
											 type="radio"
											 onChange={this.handleChange}
								/>
									<label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
										<svg className="form__star-image" width="37" height="33">
											<use xlinkHref="#icon-star"/>
										</svg>
									</label>

									<input className="form__rating-input visually-hidden"
												 name="rating"
												 value="1"
												 id="1-star"
												 type="radio"
												 onChange={this.handleChange}
									/>
										<label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
											<svg className="form__star-image" width="37" height="33">
												<use xlinkHref="#icon-star"/>
											</svg>
										</label>
				</div>
				<textarea className="reviews__textarea form__textarea" id="review"
									placeholder="Tell how was your stay, what you like and what can be improved"
									name="review"
									value={this.state.textarea}
									onChange={this.handleChange}
				/>
				<div className="reviews__button-wrapper">
					<p className="reviews__help">
						To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
					</p>
					<button className="reviews__submit form__submit button" type="submit"
									disabled={this.state.disabled}
					>
						Submit
					</button>
				</div>
			</form>
		);
	}
}

FormComments.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default FormComments;
