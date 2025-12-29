import { useState, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme === 'dark'
    })

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newMode = !prev;
            localStorage.setItem('theme', newMode ? 'dark' : 'light')
            return newMode
        })
    }

    return (
        <header className="w-screen bg-neutral-50 text-gray-900 dark:bg-gray-800 dark:text-white flex justify-between items-center py-6 px-4 shadow-md transition-colors">
            <h1 className="text-2xl font-bold">Where in the world?</h1>
            <button 
                onClick={toggleTheme}
                className="text-xl cursor-pointer">
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} /> 
            </button>
        </header>
    )
}