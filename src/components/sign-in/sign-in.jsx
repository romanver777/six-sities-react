import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import LocationButton from '../location-button/location-button';
import {getRandomInt, getInputClassName} from '../../helpers/helpers';
import './sign-in.css';


class SignIn extends React.PureComponent {

	constructor(props) {
		super(props);
		this.emailRef = React.createRef();

		this.state = {
			city: '',
			email: '',
			password: '',
			emailValid: false,
			passwordValid: false,
			formValid: false,
		}
	}

	componentDidMount() {

		const {hotels} = this.props;

		document.title = `6 cities - sign in`;

		this.setState(() => ({
			city: hotels[getRandomInt(hotels.length)].city,
		}));
	}

	handleSubmit = (e) => {

		const {onSubmit} = this.props;

		e.preventDefault();

		onSubmit({
			email: this.state.email,
			password: this.state.password,
		});

	};

	validateField = (name, value) => {

		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
		const minPassLength = 6;
		const maxPassLength = 12;

		switch (name) {

			case `email`: emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				break;

			case `password`: passwordValid = value.length >= minPassLength && value.length <= maxPassLength;
				break;

			default:
				break;
		}

		this.setState({
			emailValid,
			passwordValid
		}, this.validateForm);
	};

	validateForm = () => {
		this.setState({
			formValid: this.state.emailValid && this.state.passwordValid,
		});
	};

	handleChange = (e) => {

		const value = e.target.value;
		const name = e.target.name;

		this.setState( {[name]: value}, () => {this.validateField(name, value)} );
	};

	handleCityClick = (city) => this.props.onCityClick(city);

	render() {

		const {hotels, isAuthRequired, currentUser} = this.props;

		return (
			<div className="page page--gray page--login">

				<Header
					isAuthorizationRequired={isAuthRequired}
					currentUser={currentUser}
					onLogoClick={() => this.handleCityClick(hotels[0].city)}
				/>

				<main className="page__main page__main--login">
					<div className="page__login-container container">
						<section className="login">
							<h1 className="login__title">Sign in</h1>
							<form className="login__form form"
										action="#"
										method="post"
										onSubmit={this.handleSubmit}
							>
								<div className="login__input-wrapper form__input-wrapper">
									<label className="visually-hidden">E-mail</label>
									<input className={`login__input form__input ${getInputClassName(this.state.email, this.state.emailValid)}`}
												 type="email"
												 name="email"
												 placeholder="Email"
												 required=""
												 value={this.state.email}
												 onChange={this.handleChange}
												 ref={this.emailRef}
									/>
								</div>
								<div className="login__input-wrapper form__input-wrapper">
									<label className="visually-hidden">Password</label>
									<input className={`login__input form__input ${getInputClassName(this.state.password, this.state.passwordValid)}`}
												 type="password"
												 name="password"
												 placeholder="Password"
												 required=""
												 value={this.state.password}
												 onChange={this.handleChange}
									/>
								</div>
								<button className="login__submit form__submit button"
												type="submit"
												disabled={!this.state.formValid}
								>
									Sign in
								</button>
							</form>
						</section>

						<LocationButton
							city={this.state.city}
							onFavoriteCityClick={this.handleCityClick}
							prefix="login"
						/>

					</div>
				</main>
			</div>
		);
	}
}

SignIn.propTypes = {
	hotels: PropTypes.array.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onCityClick: PropTypes.func.isRequired,
	currentUser: PropTypes.object.isRequired,
	isAuthRequired: PropTypes.bool.isRequired,
};

export default SignIn;
