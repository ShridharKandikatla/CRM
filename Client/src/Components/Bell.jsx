import { FiBell } from "react-icons/fi";

const Bell = () => {
    return (
        <>
            <div className="inline-block group">
                <button>
                    {/* Your profile picture goes here */}
                    <FiBell className="w-6 h-6" />
                </button>
                <div className="absolute hidden w-48 py-1 mt-2 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification 3</a>
                </div>
            </div>
        </>
    )
}
export default Bell