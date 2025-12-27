import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header className="w-screen bg-neutral-50 flex justify-between items-center py-6 px-4 shadow-md">
            <h1 className="text-2xl font-bold">Where in the world?</h1>
            <div className="text-xl cursor-pointer">
                <FontAwesomeIcon icon={faMoon} /> 
            </div>
        </header>
    )
}