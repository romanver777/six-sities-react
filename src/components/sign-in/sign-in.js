import React from 'react';
import PropTypes from 'prop-types';

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

	submitHandler = (e) => {

		const {onSubmit} = this.props;

		e.preventDefault();

		onSubmit({
			login: this.state.email,
			password: this.state.password,
		});

	};

	validateField = (name, value) => {

		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;

		switch (name) {

			case `email`: emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				break;

			case `password`: passwordValid = value.length > 5;
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

	changeHandler = (e) => {

		const value = e.target.value;
		const name = e.target.name;

		this.setState( {[name]: value}, () => {this.validateField(name, value)} );
	};

	render() {

		return (
			<div className="page page--gray page--login">
				<header className="header">
					<div className="container">
						<div className="header__wrapper">
							<div className="header__left">
								<a className="header__logo-link" href="main.html">
									<img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
								</a>
							</div>
							<nav className="header__nav">
								<ul className="header__nav-list">
									<li className="header__nav-item user">
										<a className="header__nav-link header__nav-link--profile" href="#">
											<div className="header__avatar-wrapper user__avatar-wrapper">
											</div>
											<span className="header__login">Sign in</span>
										</a>
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
										onSubmit={this.submitHandler}
							>
								<div className="login__input-wrapper form__input-wrapper">
									<label className="visually-hidden">E-mail</label>
									<input className="login__input form__input"
												 type="email"
												 name="email"
												 placeholder="Email"
												 required=""
												 ref={this.loginRef}
												 value={this.state.email}
												 onChange={this.changeHandler}
									/>
								</div>
								<div className="login__input-wrapper form__input-wrapper">
									<label className="visually-hidden">Password</label>
									<input className="login__input form__input"
												 type="password"
												 name="password"
												 placeholder="Password"
												 required=""
												 ref={this.passwordRef}
												 value={this.state.password}
												 onChange={this.changeHandler}
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
								<a className="locations__item-link" href="#">
									<span>Amsterdam</span>
								</a>
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
