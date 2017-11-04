import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state=initialState.response, action) {
	switch(action.type) {
	case types.LOAD_CITIES_DATA_SUCCESS:
		return action.response;

	default:
		return state;
	}
}
