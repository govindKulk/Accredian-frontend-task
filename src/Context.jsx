import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}){

    const [storedToken, setStoredToken] = useState(null);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [user, setUser] = useState(null);

    const vaidateToken = async (accessToken) => {
        const res = await fetch('https://accredian-backend-task-5nfb.onrender.com/user/validate', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,
       
            },
            
        })

        if(res.ok){
            const data = await res.json();
            setUser(data.user);
            if(data.accessToken){
                setStoredToken(data.accessToken);
                localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
            
            }
            setIsLoggedin(true);
            setStoredToken(accessToken);
        }
        else{
            setIsLoggedin(false);
            setStoredToken(null);
            localStorage.removeItem('accessToken');
        }
    }

    useEffect(() => {

        
        const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        
        if(accessToken){
       
            console.log("validating token")
            vaidateToken(accessToken);
        }
    }, []);

    const login = (token, user) => {
        setStoredToken(token);
        localStorage.setItem('accessToken', JSON.stringify(token));
        setIsLoggedin(true)
        setUser(user);
    }

    const logout = () => {
        setStoredToken(null);
        localStorage.removeItem('accessToken');
        setIsLoggedin(false)
        setUser(null);

    }
    return (
        <AuthContext.Provider value={{storedToken, login, logout, isLoggedin, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext}