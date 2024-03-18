import TableRow from "./TableRow"


const HomeContent = () => {
    return (
        <>
            <div className="mx-5">
                {/* <HomePageButton /> */}
                <div className="inline-block overflow-hidden rounded-lg shadow">
                    <table className="leading-normal">

                        <tbody >
                            <TableRow />
                            <TableRow />
                            <TableRow />
                            <TableRow />
                        </tbody>
                    </table>
                    <div className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between ">
                        <span className="text-xs text-gray-900 xs:text-sm">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400">
                                Prev
                            </button>
                            <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400">
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