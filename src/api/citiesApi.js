class CitiesApi {
	static getAllCities() {
		return fetch('http://localhost:8080/src/api/cities.json').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}
}

export default CitiesApi;
