import { useState, useEffect } from 'react';
import { fetchAllCountries } from '../services/countriesApi';
import CountryCard from './CountryCard';

export default function CountriesList() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCountries = async () => {
            try {
                const data = await fetchAllCountries()
                setCountries(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        };
        loadCountries();
    }, []);

    if (loading) return <div>Loading...</div>

    return(
        <div className="flex flex-col gap-y-8 gap-x-12 justify-center items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {countries.map(country => (
                <CountryCard 
                    key={country.name.common}
                    flag={country.flags.svg}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital?.[0] || 'N/A'}
                />
            ))}
        </div>
    );
}