import React from 'react';
import PropTypes from 'prop-types';

const BookFlight = class BookFlight extends React.Component {
	render(){
		let data = this.props.flightBookingInfo;
		return (
			<div className="col s4 list-view__flight-image">
				<img src={data.image} alt="default image" />
				<button type="submit" className="btn btn-default">Book this flight</button>
			</div>
		);
	}
};

BookFlight.propTypes = {
	flightBookingInfo: PropTypes.object
};

export default BookFlight;
