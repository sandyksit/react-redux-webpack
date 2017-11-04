import React from 'react';
import * as searchActions from '../../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from '../Input/Input';
import './SearchForm.scss';

const SearchForm = class SearchForm extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			// form: {
			// 	'origin': '',
			// 	'destination': ''
			// }
			form: {
				'origin': '',
				'destination': ''
			}
		};

		this.filterSearchResult = this.filterSearchResult.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	}
	filterSearchResult (e) {
		e.preventDefault();

		// let formData = {
		// 	origin: this.refs.origin.value,
		// 	destination: this.refs.destination.value,
		// 	departureDate: this.refs.departure_date.value,
		// 	returnDate: this.refs.return_date.value,
		// 	Passengers: this.refs.passengers.value
		// };

		let formData = this.state.form;

		console.log(formData);

		if(formData.origin !== '' && formData.destination !== '') {
			this.props.actions.getDataByFieldNames(formData);
		}
	}
	changeHandler (event) {
		let field = event.target.name;
		let value = event.target.value;
		let tempObj = {};

		tempObj[field]=value;
		this.setState({form: tempObj});
	}

	render(){
			let response = this.props.citiesData;

			console.log(response);

		// console.log('11111');
		// console.log(response);
		// console.log('22222');

		let options = {
			origin: {
				'fieldref': 'origin',
				'placeholder': 'Enter origin city',
				'datalist': 'origin-city',
				'name':'origin',
				'cities': response
			},
			destination: {
				'fieldref': 'destination',
				'placeholder': 'Enter destination city',
				'datalist': 'destination-city',
				'name':'destination',
				'cities': response
			}
		};

		return (
				<div className="row left-section__searchform mt-10">
					<form>
						<div className="row">
							<Input param={options.destination} changeHandler={this.changeHandler} />
						</div>
						<div className="row">
							<Input param={options.destination} changeHandler={this.changeHandler} />
						</div>
						<div className="row">
							<input type="date" placeholder="Departure date" className="form-control unstyled departure-date" ref="departure_date" />
						</div>
						<div className="row">
							<input type="date" placeholder="Return date" className="form-control unstyled return-date" ref="return_date" />
						</div>
						<div className="row">
							<select className="form-control" ref="passengers">
								<option value="Passengers">Passengers</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
						<div className="row">
							<input list="languages" name="browser" />
								<datalist id="languages">
									<option value="English" />
									<option value="Chinese" />
									<option value="Dutch" />
								</datalist>
						</div>
						<div className="row">
							<button type="submit" className="btn btn-default" onClick={this.filterSearchResult}>Search</button>
						</div>
					</form>
				</div>
		);
	}
};

// function mapStateToProps(state) {

// 	return {
// 		flightData: state.flightdata,
// 		citiesData: state.citiesdata
// 	};
// }

function mapStateToProps(state) {
	return {
		citiesData: state.citiesdata,
		flightData: state.flightdata
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, searchActions), dispatch),
		getCitiesData: dispatch(searchActions.getCitiesData())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

// SearchForm.propTypes = {
// 	userInfo: PropTypes.object
// };

// function mapStateToProps(state) {
// 	return {
// 		userInfo: state.UserReducer.basics
// 	};
// }

//export default connect(mapStateToProps)(SearchForm);

//export default SearchForm;
