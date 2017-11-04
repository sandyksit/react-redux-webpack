import React from 'react';
import PropTypes from 'prop-types';
import ListViewRow from './ListViewRow';
import { connect } from 'react-redux';
import { getFlightData } from '../../actions';
import Loader from '../Loader/Loader';
import './ListView.scss';

const ListView = class ListView extends React.Component {
	getFlightResult(response) {
		if(response.flights) {
			return response.flights.map((index, item) => ( <ListViewRow flightObj={index} flightKey={item} />));
		}
	}
	render(){
		let response = this.props.flightData;

		//display loader when results is loading from api call
		if (!response.flights) {
			return <div className="Loading"><Loader/></div>;
		}

		if(response.flights.length < 1) {
			return <div className="list-view__no-records">No Record Found!!!</div>;
		}

		return (
			<div>
				{ this.getFlightResult(response) }
			</div>
		);
	}
};

//to validate prop types for this component
ListView.propTypes = {
	flightData: PropTypes.object
};

function mapStateToProps(state) {
	return {
		flightData: state.flightdata
	};
}
//dispetch getFlightData action, to get all the data on page load
function mapDispatchToProps(dispatch) {
	return {
		getFlightData: dispatch(getFlightData())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
