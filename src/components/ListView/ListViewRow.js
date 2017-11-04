import React from 'react';
import FlightDetails from './FlighDetails';
import BookFlight from './BookFlight';
import PropTypes from 'prop-types';

const ListViewRow = class ListViewRow extends React.Component {
	render(){
		let data = this.props.flightObj;
		let key = this.props.flightKey;

		let oneWay = {
			'from': data.origin,
			'to': data.destination
		};

		let Round = {
			'from': data.destination,
			'to': data.origin
		};

		return (
			<div className="row list-view" id={key}>
				<div className="col s8 list-view__flight-info">
					<div className="row">
						<div className="col list-view__price">Rs. {data.amount}</div>
					</div>
					<div className="row">
						<FlightDetails flightDetailinfo={data} routeInfo={oneWay} />
						<FlightDetails flightDetailinfo={data} routeInfo={Round} />
					</div>
				</div>
				<BookFlight flightBookingInfo={data} />
			</div>
		);
	}
};

ListViewRow.propTypes = {
	flightObj: PropTypes.object,
	flightKey: PropTypes.numer
};

export default ListViewRow;
