import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaArrowLeft, FaRegUserCircle, FaSearch, FaRegChartBar } from "react-icons/fa";
import { BsPersonFillSlash } from "react-icons/bs";
import { PiUserList } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

import Sidebar from "./sidebar";

const Homepage = () => {


    return (
        <div className="flex">
            {/* <h1>dshgbdshklhdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</h1> */}
            <Sidebar />
            <div className="h-screen flex-1 p-7 bg-purple-300">
                <h1 className="text-2xl font-semibold ">Home Page</h1>
            </div>
        </div>
    );
};
export default Homepage;
