import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { FaUser, FaUserGraduate, FaUserClock, FaVideo, FaChevronDown } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { ImMail } from "react-icons/im";
import { HiDotsVertical } from "react-icons/hi";
import ThreeDots from "./ThreeDots";

const TableRow = () => {
    return (
        <><tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {/* <img className="w-full h-full rounded-full" /> */}
                        <input id="inline-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                    </div>
                    <div className="ml-3">
                        <p className="font-bold text-2xl whitespace-no-wrap">
                            Haseeb
                        </p>
                        <p className="font-thin text-gray-400 text-xs">
                            921847863
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <table className="border-2 border-gray-200">
                    <tr className="border-2">

                        <td>
                            new call
                        </td>
                    </tr>
                    <tr className="border-2">

                        <td>
                            0
                        </td>
                    </tr>
                </table>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <IoCallSharp />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <LuMessageSquare />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <IoMdMail />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <MdOutlineMessage />
                </p>
            </td>
            <td className="px-5 py-5 border-b  border-gray-200  bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap border-l border-gray-900">
                    <FaUser />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <FaUserGraduate />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <FaUserClock />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    View All
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <FaVideo />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <PiPhoneCallFill />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <ImMail />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <IoLogoWhatsapp />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    {/* <HiDotsVertical /> */}
                    <ThreeDots />
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                <p className="text-gray-900 whitespace-no-wrap">
                    <FaChevronDown />
                </p>
            </td>
            {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
            <span className="relative">Activo</span>
        </span>
    </td> */}
        </tr></ >
    )
}
export default TableRow