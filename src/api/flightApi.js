class FlightApi {
	static getAllFlightData() {
		return fetch('http://localhost:8080/src/api/flightResponse.json').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default FlightApi;
