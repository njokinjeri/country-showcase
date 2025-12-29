import { Listbox } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const regions = [
  'Africa',
  'Americas',
  'Antarctic',
  'Asia',
  'Europe',
  'Oceania',
]

export default function RegionFilter({ selected, setSelected }) {

  return (
    <div className="relative w-64 text-sm focus-within:ring-2 focus-within:ring-violet-500 rounded-md">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button
          className="dark:bg-gray-800 dark:text-gray-200 relative w-full h-14 bg-white rounded-md shadow-sm
                     px-4 flex items-center justify-between
                     text-gray-900 tracking-wider font-nunito
                     focus:outline-none"
        >
          <span>
            {selected && selected !== 'All' ? selected : 'Filter by Region'}
          </span>

          <FontAwesomeIcon
            icon={faChevronDown}
            className="dark:text-gray-200  text-gray-600"
          />
        </Listbox.Button>

        <Listbox.Options
          className="dark:bg-gray-800 dark:text-white absolute z-10 mt-2 w-full
                     bg-white rounded-md shadow-lg
                     overflow-hidden focus:outline-none"
        >
          {regions.map(region => (
            <Listbox.Option
              key={region}
              value={region}
              className={({ focus }) =>
                `cursor-pointer px-4 py-2
                 ${focus ? 'bg-gray-200 dark:bg-gray-600' : ''}`
              }
            >
              {region}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

