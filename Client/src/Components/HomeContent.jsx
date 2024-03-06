import TableRow from "./TableRow"


const HomeContent = () => {
    return (
        <>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                {/* <HomePageButton /> */}
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        {/* <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            {/* 
                            <tr>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img className="w-full h-full rounded-full" />
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
                                        <FaChevronDown />
                                    </p>
                                </td>
                                {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                                        <span className="relative">Activo</span>
                                    </span>
                                </td> 
                            </tr>
                               
                            <tr>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img className="w-full h-full rounded-full" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Blake Bowman
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Jan 01, 2020
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                                        <span className="relative">Activo</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img className="w-full h-full rounded-full" alt />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Dana Moore
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">Editor</p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Jan 10, 2020
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-orange-200 opacity-50 rounded-full" />
                                        <span className="relative">Suspended</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 py-5 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img className="w-full h-full rounded-full" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Alonzo Cox
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                                </td>
                                <td className="px-5 py-5 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
                                </td>
                                <td className="px-5 py-5 bg-white text-sm">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full" />
                                        <span className="relative">Inactive</span>
                                    </span>
                                </td>
                            </tr>
                        */}
                        </tbody>
                    </table>
                    <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
export default HomeContent