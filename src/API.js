const BASE_URL = 'https://registry.npmjs.org/-/v1/'

export const API_URL = {
	searchUrl: (queryText, size = 10) => `${BASE_URL}search?text=${queryText}&size=${size}`,
}
