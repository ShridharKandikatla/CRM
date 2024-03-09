import Sidebar from "./sidebar";
import HomeTopContent from "./HomeTopContent";
import HomeContent from "./HomeContent"
import HomePageButton from "./HomePageButton";
import FormNewCustomer from "./FormNewCustomer";


const Homepage = () => {


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
