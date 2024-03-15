import { createContext, useContext, useState } from "react"
import { RenderHeader } from "../components/structure/Header";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";
import axios from "axios";
import url from "../../url";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

     const [ user, setUser ] = useState({email: "", isAuthenticated: false})

     const login = async(email, password) => {

          // Make a call to the authentication API to check the username
          const response = await axios.post(url + "staff/login", {
              email,
              password,
          });
          
          return new Promise(  (resolve, reject) => {
            if (response.status == 200) {
                localStorage.setItem("token", response.data.token);
                resolve("success")
                // navigate("/")
            } else if (response.status == 429) {
                console.error("Try after 15 mins");
            } else if (response.status == 400) {
                console.error("Invalid Email And Password");
                    reject("Incorrect password")
            } else {
                console.error("Invalid Email And Password");
                    reject("Incorrect password")
            }

            //    if (password === "password") {
            //         setUser({name: userName, isAuthenticated: true})
            //    } else {
            //    }
          })
          
          
     }
     const logout = () => {
        localStorage.removeItem("token");
          setUser({...user, isAuthenticated: false})
     }


     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                         <RenderHeader />
                         <RenderMenu />
                         <RenderRoutes />
                    </>
                    
               </AuthContext.Provider>
          
     )

}