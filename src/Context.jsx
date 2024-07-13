import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}){

    const [storedToken, setStoredToken] = useState(null);
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {

        
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        
        if(accessToken){
            const vaidateToken = async () => {
                const res = await fetch('https://accredian-backend-task-5nfb.onrender.com/user/validate', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': accessToken,
               
                    },
                    
                })

                if(res.ok){
                    setIsLoggedin(true);
                    setStoredToken(accessToken);
                }
                else{
                    setIsLoggedin(false);
                    setStoredToken(null);
                    localStorage.removeItem('accessToken');
                }
            }
            
            vaidateToken();
        }
    }, []);

    const login = (token) => {
        setStoredToken(token);
        localStorage.setItem('accessToken', JSON.stringify(token));
    }

    const logout = () => {
        setStoredToken(null);
        localStorage.removeItem('accessToken');
    }
    return (
        <AuthContext.Provider value={{storedToken, login, logout, isLoggedin}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext}