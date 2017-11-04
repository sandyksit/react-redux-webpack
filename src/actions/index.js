import * as types from './actionTypes';
import FlightApi from '../api/flightApi';
import CitiesApi from '../api/citiesApi';

export function loadFlightData(response) {
	return {
		type: types.LOAD_FLIGHT_DATA_SUCCESS,
		response
	};
}

export function responseIsLoading(bool) {
	return {
		type: 'RESPONSE_IS_LOADING',
		isLoading: bool
	};
}

export function responseHasErrored(bool) {
	return {
		type: 'RESPONSE_HAS_ERRORED',
		hasErrored: bool
	};
}

export function getFlightData() {
	return function(dispatch) {
		return FlightApi.getAllFlightData().then(data => {
			dispatch(loadFlightData(data));
		}).catch(error => {
			throw(error);
		});
	};
}

//to filter result based upon the price
function findInObject(responseObject, filterObj) {
	return responseObject.filter(function(obj) {
		return Object.keys(filterObj).every(function(c) {
			return parseInt(obj[c]) <= parseInt(filterObj[c]);
		});
	});
}

function filterApiResponse(responseObject, filterObj) {
	return responseObject.filter(function(obj) {
		return Object.keys(filterObj).every(function(c) {
			return obj[c] == filterObj[c];
		});
	});
}

//to get flight data and apply filter by price
export function getFlightDataByPrice(filterPrice) {
	return function(dispatch) {
		return FlightApi.getAllFlightData().then(data => {
			let response = findInObject(data.flights, filterPrice);
			data.flights = response;
			dispatch(loadFlightData(data));
		}).catch(error => {
			throw(error);
		});
	};
}

//to get flight data and apply filter by price
export function getDataByFieldNames(formObj) {
	return function(dispatch) {
		return FlightApi.getAllFlightData().then(data => {
			let response = filterApiResponse(data.flights, formObj);
			data.flights = response;
			dispatch(loadFlightData(data));
		}).catch(error => {
			throw(error);
		});
	};
}

//to display trip date on navigation
export function displayTripDate (date) {
	return {
		type: types.DISPLAY_TRIP_DATE,
		date
	};
}

export function loadCitiesData(response) {
	return {
		type: types.LOAD_CITIES_DATA_SUCCESS,
		response
	};
}

export function getCitiesData() {
	return function(dispatch) {
		return CitiesApi.getAllCities().then(citiesdata => {
			dispatch(loadCitiesData(citiesdata.cities));
		}).catch(error => {
			throw(error);
		});
	};
}
