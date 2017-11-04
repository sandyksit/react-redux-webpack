import {combineReducers} from 'redux';
import flightdata from './reducer-flight';
import citiesdata from './reducer-cities';

const allReducers = combineReducers({
	flightdata: flightdata,
	citiesdata: citiesdata
});

export default allReducers;
