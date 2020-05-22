import React from 'react';
import PropTypes from 'prop-types';

class SortingType extends React.PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			option: `Popular`,
		}
	}

	handleClickToggle = () => {

		this.setState((prevState) => ({
			isOpen: !prevState.isOpen,
		}));
	};

	handleClick = (e) => {

		const {onChangeOption} = this.props;

		document.querySelector('.places__option--active').classList.remove('places__option--active');

		this.handleClickToggle();
		this.setState({option: e.target.innerHTML});

		e.target.classList.add('places__option--active');

		onChangeOption(e.target.innerHTML);
	};

	render() {

		return (
			<form className="places__sorting" action="#" method="get">
				<span className="places__sorting-caption">Sort by</span>
				<span className="places__sorting-type" tabIndex="0"
							onClick={this.handleClickToggle}
				>
					{this.state.option}
					<svg className="places__sorting-arrow" width="7" height="4">
						<use xlinkHref="#icon-arrow-select"/>
					</svg>
				</span>
				<ul className={this.state.isOpen
												? `places__options
													places__options--custom
				 									places__options--opened`
												: `places__options
													places__options--custom
													places__options--closed`}
				>
					<li className="places__option places__option--active" tabIndex="0"
							onClick={this.handleClick}
					>
						Popular
					</li>
					<li className="places__option" tabIndex="0"
							onClick={this.handleClick}
					>
						Price: low to high
					</li>
					<li className="places__option" tabIndex="0"
							onClick={this.handleClick}
					>
						Price: high to low
					</li>
					<li className="places__option" tabIndex="0"
							onClick={this.handleClick}
					>
						Top rated first
					</li>
				</ul>
			</form>
		);
	}
}

SortingType.propType = {
	onChangeOption: PropTypes.func.isRequired,
};

export default SortingType;
