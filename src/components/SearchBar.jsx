import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar({ searchCountry, setSearchCountry }) {
  return (
    <div className="w-screen">
      <label htmlFor="countrySearch" className="sr-only">Search for a country</label>
      <div className="dark:bg-gray-800 dark:text-white w-5/6 md:w-96 bg-white flex items-center gap-4 p-4 
                      rounded-md shadow-sm overflow-hidden
                      focus-within:ring-2 focus-within:ring-violet-500"
      >
        <FontAwesomeIcon 
            className="dark:text-gray-400 text-gray-600"
            icon={faMagnifyingGlass}/>
        <input
            className="outline-none tracking-wider font-nunito text-base bg-transparent"
            type="text" 
            name="countrySearch" 
            id="countrySearch" 
            placeholder="Search for a country..."
            autoComplete="off"
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>
    </div>
  )
}

