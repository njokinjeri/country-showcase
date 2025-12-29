import { Link } from "react-router"

export default function CountryCard ({ flag, name, population, region, capital }) {
  return (
    <Link to={`/country/${name}`}>
      <div className="dark:bg-gray-800 dark:text-white w-72 h-84 bg-white rounded-lg shadow-md hover:outline-1 hover:outline-violet-500">
        <img 
          className="w-full h-40 object-cover rounded-t-lg overflow-hidden"
          src={flag} 
          alt={`${name} flag`} />
        <div className="p-6 ">
          <h1 className="max-h-16 text-xl font-bold pb-4">{name}</h1>
          <p><strong>Population:</strong> {population.toLocaleString()}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Capital:</strong> {capital}</p>
        </div>
      </div>
    </Link>
  )
}
