import { useState, useEffect } from 'react';
import { fetchAllCountries } from '../services/countriesApi';
import CountryCard from './CountryCard';
import Loading from "./Loading";

export default function CountriesList({ selectedRegion, searchCountry }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCountries = async () => {
            try {
                const data = await fetchAllCountries()

                const sortedData = data.sort((a, b) => 
                    a.name.common.localeCompare(b.name.common)
                );

                setCountries(sortedData)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        };
        loadCountries();
    }, []);

    if (loading) return <Loading className="justify-start"/> 

    let filteredCountries = countries

    if (selectedRegion && selectedRegion !== 'All') {
        filteredCountries = filteredCountries.filter(
            country => country.region === selectedRegion
        );
    }

    if (searchCountry) {
        filteredCountries = filteredCountries.filter(
            country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
        );
    }


    return(
        <div className="flex flex-col gap-y-8 gap-x-12 justify-center items-center 
                        md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
        >
            {filteredCountries.length > 0 ? (
                filteredCountries.map(country => (
                    <CountryCard 
                        key={country.name.common}
                        flag={country.flags.svg}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital?.[0] || 'N/A'}
                    />
                ))
            ) : (
                <div>No countries found</div>
                )
            }
        </div>
    );
}