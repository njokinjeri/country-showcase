import '../styles/loading.css';

export default function Loading( { className }) {
    return (
        <div className={`dark:bg-gray-900 w-screen h-screen bg-neutral-100 flex flex-col items-center gap-4 overflow-hidden ${className}`}
        >
            <div className="loader"></div>
            <p className="dark:text-gray-200 font-bold text-lg">Loading...</p>
        </div>
    )
}