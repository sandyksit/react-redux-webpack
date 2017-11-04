import React from 'react';
import PropTypes from 'prop-types';

const FlightDetails = class FlightDetails extends React.Component {
	render(){
		let data = this.props.flightDetailinfo;
		let routeInfo = this.props.routeInfo;
		return (
			<div className="col s6 list-view__flight-details">
				<div>{data.flightNo}</div>
				<div className="uppercase">{data.origin} > {data.destination}</div>
				<div>Depart: {routeInfo.from}</div>
				<div>Arrive: {routeInfo.to}</div>
			</div>
		);
	}
};

FlightDetails.propTypes = {
	flightDetailinfo: PropTypes.object,
	routeInfo: PropTypes.object
};

export default FlightDetails;
