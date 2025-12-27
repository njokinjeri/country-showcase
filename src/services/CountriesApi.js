const BASE_URL = 'https://restcountries.com/v3.1/all';

const FIELDS = [
    'flags',
    'capital',
    'currencies',
    'languages',
    'name',
    'nativeName',
    'population', 
    'region',
    'subregion',
    'borders',
    'topLevelDomain'
];

const fetchFromAPI = async (endpoint) => {
    try {
        const fieldsParam = FIELDS.join(',');
        const url = `${BASE_URL}${endpoint}?fields=${fieldsParam}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching from API:', error);
        throw error;
    }
};

export const fetchALLCountries = () => fetchFromAPI('/all');

export const fetchCountryByName = async (name) => {
    const data = await fetchFromAPI(`/name/${name}`);
    return data[0];
};