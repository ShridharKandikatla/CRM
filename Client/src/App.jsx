
// import './App.css'

import { BrowserRouter, Routes, Route, Router, } from "react-router-dom"
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import FormNewCustomer from './Components/FormNewCustomer'
import { useState } from "react";
import axios from "axios";
import url from "../url";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    // Store token securely, e.g., in HTTP-only cookie
    // Set isLoggedIn to true upon successful login
    const token1 = localStorage.getItem("token")


    axios.get(url + "staff/profile", {
      headers: {
        Authorization: `${token1}`,
      },
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        // navigate("/");
        setIsLoggedIn(true);
      }
    })

  };

  const handleLogout = () => {
    // Clear authentication state and token
    setIsLoggedIn(false);
    // Perform logout actions, e.g., clearing cookies
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
