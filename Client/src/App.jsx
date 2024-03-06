
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'


function App() {
  return (
    <>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/dashboard" element={<Sidebar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
