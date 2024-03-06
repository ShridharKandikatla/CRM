import Sidebar from "./Sidebar";
import HomeTopContent from "./HomeTopContent";


const Homepage = () => {


    return (
        <div className="flex">
            {/* <h1>dshgbdshklhdsvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</h1> */}
            <Sidebar />
            {/* <div className="h-screen flex-1 p-7 bg-purple-300">
                <h1 className="text-2xl font-semibold ">Home Page</h1>
            </div> */}
            <HomeTopContent />
            {/* <div>
                <HomeTopContent />
                <HomeContent />
            </div> */}
        </div>
    );
};
export default Homepage;
