import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class SignIn extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			emailValid: false,
			passwordValid: false,
			formValid: false,
		}
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

		const {isAuthRequired, currentUser} = this.props;

		return (
			<div className="page page--gray page--login">
				<header className="header">
					<div className="container">
						<div className="header__wrapper">
							<div className="header__left">
								<Link to="/" className="header__logo-link header__logo-link--active buttonLink"
											onClick={() => this.handleCityClick('Paris')}
								>
									<img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
								</Link>
							</div>
							<nav className="header__nav">
								<ul className="header__nav-list">
									<li className="header__nav-item user">
										<button className="header__nav-link header__nav-link--profile buttonLink">
											<div className="header__avatar-wrapper user__avatar-wrapper">
											</div>
											<span className="header__login">
												{!isAuthRequired
													? <Link to="/favorites">${currentUser.name}</Link>
													: `Sign in`}
											</span>
										</button>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>

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
									<input className="login__input form__input"
												 type="email"
												 name="email"
												 placeholder="Email"
												 required=""
												 value={this.state.email}
												 onChange={this.handleChange}
									/>
								</div>
								<div className="login__input-wrapper form__input-wrapper">
									<label className="visually-hidden">Password</label>
									<input className="login__input form__input"
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
						<section className="locations locations--login locations--current">
							<div className="locations__item">
								<button className="locations__item-link buttonLink">
									<span>Amsterdam</span>
								</button>
							</div>
						</section>
					</div>
				</main>
			</div>
		);
	}
}

SignIn.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
