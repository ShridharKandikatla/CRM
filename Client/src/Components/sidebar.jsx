import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaArrowLeft, FaRegChartBar } from "react-icons/fa";
import { BsPersonFillSlash } from "react-icons/bs";
import { PiUserList } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: <MdDashboard /> },
        { title: "Lead List", src: <PiUserList /> },
        { title: "My Follow-ups", src: <SlCalender /> },
        { title: "Failed Leads ", src: <BsPersonFillSlash /> },
        { title: "Reports", src: <FaRegChartBar /> }
    ];

    return (
        <div>
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-purple-900 h-screen p-5  pt-8 relative duration-300  `}
            >
                <div
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-indigo-200
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                >
                    <FaArrowLeft color="white" />
                </div>
                <div className="flex gap-x-4 items-center">
                    <img
                        src="./src/assets/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Triounity Education
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            {Menu.src}
                            {/* <MdDashboard /> */}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}
export default Sidebar