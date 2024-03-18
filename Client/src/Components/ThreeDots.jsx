
import { HiDotsVertical } from "react-icons/hi";

const ThreeDots = () => {
    return (
        <div>
            <div className="relative inline-block group">
                <button>
                    {/* Your profile picture goes here */}
                    <HiDotsVertical className="w-6 h-6" />
                </button>
                <div className="absolute right-0 hidden w-48 py-1 mt-2 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                </div>
            </div>

        </div>
    )
}
export default ThreeDots