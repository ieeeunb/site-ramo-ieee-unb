const apiUrl = process.env.GATSBY_APP_API_URL;

export function getStatistics() {

	return fetch(`${apiUrl}/api/statistics`)
	.then((response) => {

		if (!response.ok) {
			throw Error(response.statusText);
		}

		return response.json();

	}).catch((error) => {

		console.log(error);

	})
}