const BASE_URL = "https://restcountries.eu/rest/v2";
const FIELDS = "flag;name;population;region;capital;nativeName;population;subregion;topLevelDomain;currencies;languages;alpha3Code;borders";

getCountries = async () => {
	try {
		let res = await axios.get(`${BASE_URL}/all?fields=${FIELDS}`);
		return res.data;
	}
	catch(err) {
		throw err;
	}
}