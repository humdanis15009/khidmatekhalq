import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { server } from "../App";
import toast, { Toaster } from 'react-hot-toast'

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [auth, setAuth] = useState()
    const [isAuth, setIsAuth] = useState(false)
    const [btnLoading, setBtnLoading] = useState(false)
    const [loading, setLoading] = useState(true)

    async function loginUser(email, password, navigate) {
        setBtnLoading(true)
        try {
            console.log(email, password)
            const { data } = await axios.post(`${server}/api/user/login`, {
                email,
                password
            })
            toast.success(data.message)
            localStorage.setItem("token", data.token)
            setUser({
                ...data.user,
                token: data.token  // Attach the token here
            });
            localStorage.setItem("user", JSON.stringify(data.user))
            setIsAuth(true)


            setBtnLoading(false)
            navigate("/")
        } catch (error) {
            setBtnLoading(false)
            setAuth(false)
            toast.error(error.response.data.message)

        }
    }
    async function logOut(navigate) {
        setBtnLoading(true)
        try {

            toast.success("Logged out successfully")
            localStorage.removeItem("token", data.token)
            //  setUser(data.user)

            setUser({});
            setIsAuth(false)
            setBtnLoading(false)
            navigate("/auth")
        } catch (error) {
            setBtnLoading(false)
            setAuth(false)
            toast.error(error.response.data.message)

        }
    }

    async function registerUser(name, email, password, navigate) {
        setBtnLoading(true)
        try {
            console.log(name, email, password)

            const { data } = await axios.post(`${server}/api/user/register`, {
                name,
                email,
                password
            })
            toast.success(data.message)
            localStorage.setItem("activationToken", data.activationToken)
            setBtnLoading(false)
            navigate("/verify")
        } catch (error) {
            setBtnLoading(false)
            toast.error(error.response.data.message)

        }
    }

    async function verifyOtp(otp, navigate) {
        setBtnLoading(true)
        const activationToken = localStorage.getItem("activationToken")
        try {
            const { data } = await axios.post(`${server}/api/user/verify`, {
                otp,
                activationToken,
            })
            toast.success(data.message)
            navigate("/login")
            localStorage.clear()
            setBtnLoading(false)
        } catch (error) {
            toast.error(error.response.data.message)
            setBtnLoading(false)
        }
    }

    async function fetchUser() {
        try {
            const { data } = await axios.get(`${server}/api/user/me`, {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            setIsAuth(true)
            setUser(data.user)
            setLoading(false)
            console.log(data);

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return <UserContext.Provider value={{
        user,
        setUser,
        setIsAuth,
        isAuth,
        loginUser,
        logOut,
        btnLoading,
        loading,
        registerUser,
        verifyOtp
    }}>
        {children}
        <Toaster />
    </UserContext.Provider>
}

export const UserData = () => useContext(UserContext)