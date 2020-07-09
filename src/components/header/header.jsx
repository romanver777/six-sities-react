import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {BASE_URL} from '../../const';

const Header = (props) => {

	const {isAuthorizationRequired, currentUser, onLogoClick} = props;

	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<Link to={BASE_URL + `/`}
									className="header__logo-link buttonLink"
									onClick={onLogoClick}
						>
							<img className="header__logo" src={BASE_URL + `/img/logo.svg`} alt="6 cities logo" width="81" height="41"/>
						</Link>
					</div>
					<nav className="header__nav">
						<ul className="header__nav-list">
							<li className="header__nav-item user">
								<button className="header__nav-link header__nav-link--profile buttonLink">
									<div className="header__avatar-wrapper user__avatar-wrapper">
									</div>

									{!isAuthorizationRequired
										? <span className="header__user-name user__name">
												{(window.location.pathname !== '/favorites') ? <Link to={BASE_URL + `/favorites`}>{currentUser.name}</Link> : currentUser.name}
													</span>
										: <span className="header__login">
											{(window.location.pathname !== '/login') ?	<Link to={BASE_URL + `/login`}>Sign in</Link> : `Sign In`}
											</span>
									}

								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	isAuthorizationRequired: PropTypes.bool.isRequired,
	currentUser: PropTypes.object.isRequired,
	onLogoClick: PropTypes.func,
};

export default Header;
