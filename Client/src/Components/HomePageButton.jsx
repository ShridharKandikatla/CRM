

const HomePageButton = () => {
    const BtnName = [
        { id: 0, name: "All" },
        { id: 1, name: "New" },
        { id: 2, name: "New (Overdue)" },
        { id: 3, name: "Call back Followup" },
        { id: 4, name: "Call Back (Overdue)" },
        { id: 5, name: "Interested Followup" },
        { id: 6, name: "Interested (Overdue)" },
        { id: 7, name: "Prospect" },
        { id: 8, name: "Prospect (Overdue)" },
        { id: 9, name: "To Be Enrolled" },
        { id: 10, name: "To Be Enrolled - Old" },
        { id: 11, name: "Recycled" },
        { id: 12, name: "Not Interested" },
        { id: 13, name: "Wrong Mobile Number" },
        { id: 14, name: "Referred From Me" },
        { id: 15, name: "Re-Equired" }
    ]

    // const myButtonList = BtnName.map((item, index) => (
    //     <button  type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"></button>
    // ));


    return (
        <div className="pb-3 mx-4">
            {BtnName.map((Menu, index) => (
                <button key={index} type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">{Menu.name}</button>
            ))}

            {/* {myButtonList} */}
        </div>
    )
}
export default HomePageButton