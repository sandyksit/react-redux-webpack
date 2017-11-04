import * as types from './actionTypes';
import CitiesApi from '../api/citiesApi';

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
