export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0cd69b0e73msh04ce1cc754289eep18ff21jsnd0599a889841',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
export const WEATHER_API_KEY = "7454d65faa975f224f6bc598ccfe852f"
export const DISASTER_API_URL = "https://dc6e72c4-8622-4280-9089-79102851df02.mock.pstmn.io/api/v1/disasters?lat=33.2896&long=-97.6982" //MOCK DATA
// export const DISASTER_API_URL = "https://dc6e72c4-8622-4280-9089-79102851df02.mock.pstmn.io"

// const fetchDisasterData = () => {
// 	return fetch("https://dc6e72c4-8622-4280-9089-79102851df02.mock.pstmn.io/api/v1/disasters?lat=33.2896&long=-97.6982")
// 	.then(response => response.json())
// }