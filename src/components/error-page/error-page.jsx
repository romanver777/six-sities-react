import React from 'react';

const ErrorPage = () => {

	return (
		<main className="page__main page__main--favorites page__main--favorites-empty">
			<div className="page__favorites-container container">
				<section className="favorites favorites--empty">
					<h1 className="visually-hidden">404 error</h1>
					<div className="favorites__status-wrapper">
						<b className="favorites__status">404 error</b>
						<p className="favorites__status-description">Page not found</p>
					</div>
				</section>
			</div>
		</main>
	);
};

export default ErrorPage;