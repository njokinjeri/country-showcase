import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  return (
    <div className="w-screen">
      <label htmlFor="countrySearch" className="sr-only">Search for a country</label>
      <div className="w-5/6 md:w-96 bg-white flex items-center gap-4 p-4 rounded-md shadow-sm overflow-hidden">
        <FontAwesomeIcon 
            className="text-gray-600"
            icon={faMagnifyingGlass}/>
        <input
            className="outline-none tracking-wider font-nunito text-base"
            type="text" 
            name="countrySearch" 
            id="countrySearch" 
            placeholder="Search for a country..."/>
      </div>
    </div>
  )
}

