import { useState, createContext, useEffect } from "react";
import FetcherAPI from '../lib/fetcher'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ userDetails, setUserDetails ] = useState(null);

   useEffect(() => {
       const getUser = async() => {
        try {
			
            await FetcherAPI.get('/login').then(response => {
                if(response.data) {
                    // console.log(response.data)
                    setUserDetails(response.data.username)
                   
                } else {
                    setUserDetails(null)
                   
                }
            })
        } catch (error) {
            console.log(error)
        }
       }
    getUser()
       
   }, [])

   console.log(userDetails)
 

    return (
        <AuthContext.Provider value={{userDetails, setUserDetails, loggedIn, setLoggedIn}}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;