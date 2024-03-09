import { useState } from "react"
// import Modal from "./components/Modal"
// import Trash from "./icons/Trash"
import Modal from "./Modal";
import { FaPlus } from "react-icons/fa";

export default function FormNewCustomer() {
    const [open, setOpen] = useState(false)
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
                            <input className="flex-grow p-2 border" type="text" placeholder="First Name*" required />
                            <input className="flex-grow p-2 border" type="text" placeholder="Last Name" />
                        </div>
                        <div className="flex space-x-8">
                            <input className="p-2 border" type="email" placeholder="Email" />
                            <input className="p-2 border" type="tel" placeholder="Mobile Number*" required />
                        </div>
                        <div className="flex space-x-20">
                            <select className="p-2 border" required>
                                <option>Primary Source*      </option>
                                <option>Primary Source*      </option>
                                <option>Primary Source*      </option>
                                <option>Primary Source*      </option>
                                {/* Add your options here */}
                            </select>
                            <select className="p-2 border" required>
                                <option>secondary Source*</option>
                                <option>secondary Source*</option>
                                <option>secondary Source*</option>
                                <option>secondary Source*</option>
                                {/* Add your options here */}
                            </select>
                        </div>
                        <div className="flex space-x-32">
                            <select className="p-2 border" required>
                                <option>disposition</option>
                                <option>disposition</option>
                                <option>disposition</option>
                                <option>disposition</option>
                                {/* Add your options here */}
                            </select>
                            <select className="p-2 border" required>
                                <option>sub disposition</option>
                                <option>sub disposition</option>
                                <option>sub disposition</option>
                                <option>sub disposition</option>
                                {/* Add your options here */}
                            </select>

                        </div>
                        <div className="flex space-x-36">
                            <select className="p-2 border" required>
                                <option>Course</option>
                                <option>Course</option>
                                <option>Course</option>
                                <option>Course</option>
                                {/* Add your options here */}
                            </select>
                            <select className="p-2 border" required>
                                <option>Specilization</option>
                                <option>Specilization</option>
                                <option>Specilization</option>
                                <option>Specilization</option>
                                {/* Add your options here */}
                            </select>

                        </div>
                        <input className="flex-grow p-2 border" type="text" placeholder="ERP Comment" />
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 text-white bg-blue-500 rounded">SAVE & CLOSE</button>
                            <button className="px-4 py-2 text-white bg-blue-500 rounded">SAVE & ADD MORE</button>
                        </div>
                    </div>
                </div>






            </Modal>
        </main>
    )
}