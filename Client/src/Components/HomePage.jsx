import Sidebar from "./sidebar";
import HomeTopContent from "./HomeTopContent";
import HomeContent from "./HomeContent"
import HomePageButton from "./HomePageButton";
import { useEffect } from "react";
import axios from "axios";
import url from "../../url";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token")
        if (token != undefined) {

            axios.get(url + "staff/profile", {
                headers: {
                    Authorization: `${token}`,
                },
            }).then((res) => {
                console.log(res);
                if (res.status == 200) {
                    console.log("Auth ", "done");
                    navigate("/");
                } else if (res.status == 400) {
                    console.log("Auth not", "done");
                    navigate("/login");
                }
            }).catch(() => {
                navigate("/login");
            })


        }
    }, [])


    return (
        <div className="flex">
            {/* <h1>dshgbdshklhdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</h1> */}
            <Sidebar />
            {/* <div className="flex-1 h-screen bg-purple-300 p-7">
                <h1 className="text-2xl font-semibold ">Home Page</h1>
            </div> */}
            <div>
                <HomeTopContent />
                <div>

                </div>
                <HomePageButton />
                <HomeContent />
            </div>
            {/* <FormNewCustomer /> */}
            {/* <div>
                <HomeTopContent />
                <HomeContent />
            </div> */}
        </div>
    );
};
export default Homepage;
