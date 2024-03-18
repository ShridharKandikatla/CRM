import { useState } from "react"
// import Modal from "./components/Modal"
// import Trash from "./icons/Trash"
import Modal from "./Modal";
import { FaPlus } from "react-icons/fa";
import url from "../../url";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function FormNewCustomer() {
    // const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [mobileNo, setMobileNo] = useState("");

    const OnSave = async () => {
        const response = await axios.post(url + "staff/login", {
            firstName,
            mobileNo,
        });

        if (response.status == 200) {
            // localStorage.setItem("token", response.data.token);
            // navigate("/")
            alert("data saved");
        } else if (response.status == 400) {
            console.error("Invalid Email And Password");
        } else {
            console.error("Invalid Email And Password");
        }
    }

    return (
        <main className="App">
            <button className="btn btn-danger" onClick={() => setOpen(true)}>
                {/* <FaDeleteLeft /> Delete */}
                <FaPlus />
            </button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-90">
                    <div className="flex flex-col p-8 space-y-4 bg-white rounded shadow-lg">
                        <h2 className="text-xl font-bold text-gray-900">Quick Add</h2>
                        <div className="flex space-x-8">
                            <input onChange={(e) => { setFirstName(e.target.value) }} className="flex-grow p-2 border" type="text" placeholder="First Name*" required />
                            <input className="flex-grow p-2 border" type="text" placeholder="Last Name" />
                        </div>
                        <div className="flex space-x-8">
                            <input className="p-2 border " style={{ width: 251 }} type="email" placeholder="Email" />
                            <input onChange={(e) => { setMobileNo(e.target.value) }} style={{ width: 246 }} className="p-2 border" type="tel" placeholder="MobileNo Number*" required />
                        </div>
                        <div className="flex space-x-10">
                            <select className="p-2 border" required>
                                <option> Primary Source &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </option>
                                <option>2 Source      </option>
                                <option>Primary Source      </option>
                                <option>Primary Source      </option>
                                {/* Add your options here */}
                            </select>
                            <select className="p-2 border" required>
                                <option>secondary Source&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option>secondary Source</option>
                                <option>secondary Source</option>
                                <option>secondary Source</option>
                                {/* Add your options here */}
                            </select>
                        </div>
                        <div className="flex space-x-10">
                            <select className="p-2 border" required>
                                <option>disposition &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option>disposition</option>
                                <option>disposition</option>
                                <option>disposition</option>
                                {/* Add your options here */}
                            </select>
                            <select className="p-2 border" required>
                                <option>sub disposition &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option>sub disposition</option>
                                <option>sub disposition</option>
                                <option>sub disposition</option>
                                {/* Add your options here */}
                            </select>

                        </div>
                        <div className="flex space-x-10">
                            <select className="p-2 border" required>
                                <option>Course &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option>Course</option>
                                <option>Course</option>
                                <option>Course</option>
                                {/* Add your options here */}
                            </select>
                            <select className="p-2 border" required>
                                <option>Specilization &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option>Specilization</option>
                                <option>Specilization</option>
                                <option>Specilization</option>
                                {/* Add your options here */}
                            </select>

                        </div>
                        <input className="flex-grow p-2 border" type="text" placeholder="ERP Comment" />
                        <div className="flex space-x-4">
                            <button onClick={() => OnSave()} className="px-4 py-2 text-white bg-blue-500 rounded">SAVE & CLOSE</button>
                            <button className="px-4 py-2 text-white bg-blue-500 rounded">SAVE & ADD MORE</button>
                        </div>
                    </div>
                </div>






            </Modal>
        </main>
    )
}