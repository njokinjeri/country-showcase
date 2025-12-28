const BASE_URL = 'https://restcountries.com/v3.1';

const FIELDS = [
    'flags',
    'capital',
    'currencies',
    'languages',
    'name',
    'population', 
    'region',
    'subregion',
    'borders',
    'tld'
];

const fetchFromAPI = async (endpoint) => {
    try {
        const fieldsParam = FIELDS.join(',');
        const url = `${BASE_URL}${endpoint}?fields=${fieldsParam}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching from API:', error);
        throw error;
    }
};

export const fetchAllCountries = () => fetchFromAPI('/all');

export const fetchCountryByName = async (name) => {
    const data = await fetchFromAPI(`/name/${name}`);
    return data[0];
};

export const fetchCountryByCode = async (code) => {
    try {
        const response = await fetch(`${BASE_URL}/alpha/${code}`);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data[0].name.common
    } catch (error) {
        console.error('Error fetching country by code:', error);
        return code;
    }
};