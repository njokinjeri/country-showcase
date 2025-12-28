import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate  } from "react-router";
import { fetchCountryByName, fetchCountryByCode } from '../services/countriesApi';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function CountryDetail() {
  let { name } = useParams();
  let navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borderNames, setBorderNames] = useState([]);

  useEffect(() => {
    const loadCountry = async () => {
      try {
        const data = await fetchCountryByName(name)
        setCountry(data);

        if (data.borders) {
            const names = await Promise.all(
                data.borders.map(code => fetchCountryByCode(code))
            );
            setBorderNames(names)
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (name) { 
        loadCountry();
    }
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (!country) return <div>Country not found</div>;

  return (
    <section className="w-screen h-screen bg-neutral-100 flex flex-col gap-6 pt-16 pl-10 pb-4
                        font-nunito overflow-hidden">
        <button
            onClick={() => navigate(-1)} 
            className="bg-white w-32 h-10 flex justify-center items-center 
                        gap-2 rounded-sm shadow-(--button-shadow) cursor-pointer"
                        >
            <FontAwesomeIcon 
                className="text-sm text-gray-950"
                icon={faArrowLeft}
            />
            <p className="text-base font-light">Back</p>
        </button>
        <div className="w-full flex flex-col lg:flex-row">
            <img
                className="w-96 py-10 md:w-1/2 md:max-w-150"
                src={country.flags.svg} 
                alt={`${country.name.common} flag`} 
            />
            <div className="flex flex-col justify-center gap-4 lg:pl-10">
                <h1 className="text-xl font-bold">{country.name.common}</h1>
                <div className="flex flex-col gap-4 text-gray-800 text-base/7 md:flex-row md:items-start md:gap-10">
                    <div>
                        <p><strong>Native Name:</strong> {
                            country.name.nativeName 
                            ? Object.values(country.name.nativeName)[0].common
                            : 'N/A'
                        }</p>
                        <p><strong>Population:</strong> {country.population}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Sub Region:</strong> {country.subregion}</p>
                        <p><strong>Capital:</strong> {
                            country.capital?.[0] || 'N/A'
                        }</p>
                    </div>
                    <div>
                        <p><strong>Top Level Domain:</strong> {
                            country.tld?.join(', ') || 'N/A'
                        }</p>
                        <p><strong>Currencies:</strong> {
                            country.currencies && Object.values(country.currencies).map(c => c.name).join(', ')}</p>
                        <p><strong>Languages:</strong> {
                            country.languages && Object.values(country.languages).join(', ')
                        }</p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap items-center gap-4 pt-4 text-lg text-gray-800">
                    <p className="font-light">Border Countries:</p> 
                    {borderNames.length > 0 
                    ? (borderNames.map((borderName, index) => (
                        <Link key={index} to={`/country/${borderName}`}>
                            <button
                                className="bg-white px-6 h-8 flex justify-center items-center gap-2 
                                        rounded-sm shadow-(--button-shadow) text-base font-light cursor-pointer overflow-hidden"
                            > {borderName}
                            </button>
                        </Link>
                        ))) 
                    : (
                    <span className="text-base font-medium">None</span>
                    )}  
                </div>
            </div>
        </div>
     
    </section>
  )
}

