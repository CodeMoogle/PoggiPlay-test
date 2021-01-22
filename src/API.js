const BASE_URL = 'https://data.jsdelivr.com/v1/'

export const API_URL = {
	searchUrl: (queryText, size = 50) => `https://registry.npmjs.org/-/v1/search?text=${queryText}&size=${size}`,
	packageStats: name => `${BASE_URL}package/npm/${name}/stats`,
}
