const apiUrl = process.env.GATSBY_APP_API_URL;

export async function getStatistics() {
	try {
		const res = await fetch(`${apiUrl}/api/statistics`)
	
		if (!res.ok) {
			throw new Error('Erro ao buscar estatísticas.');
		}
	
		return {
			props: await res.json()
		}
	} catch (error) {
		return {
			status: 500,
			headers: {},
			props: {}
		}
	}

}