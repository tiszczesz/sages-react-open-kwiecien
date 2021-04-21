import axios from 'axios'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useOAuth2Token } from 'react-oauth2-hook'
import useSWR, { SWRConfig } from 'swr'
import { UserProfile } from '../model/UserProfile'

interface UserCtx {
    token?: string
    user?: UserProfile
    login(): void
    logout(): void
}

const initialCtx: UserCtx = {
    login() { throw 'No Provider!! ' },
    logout() { throw 'No Provider!! ' }
}

export const UserContext = React.createContext(initialCtx)


export const useUser = () => {
    const { user } = useContext(UserContext)
    return user;
}

export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserCtx['user']>(undefined)

    const [token, getToken, setToken] = useOAuth2Token({
        authorizeUrl: "https://accounts.spotify.com/authorize",
        scope: [""],
        clientID: "35402699f9104773b21aa0ac1db225d7",
        // redirectUri: document.location.href + "callback",
        redirectUri: "http://localhost:3000/callback",
    })

    useEffect(() => {
        const handle = axios.interceptors.request.use((config) => {
            config.headers['Authorization'] = 'Bearer ' + token;
            return config
        })
        return () => axios.interceptors.request.eject(handle)
    }, [token])

    useEffect(() => {
        if (!token) return;
        axios.get<UserProfile>('https://api.spotify.com/v1/me').then(resp => {
            setUser(resp.data)
        })
    }, [token])

    const login = useCallback(() => {
        getToken()
    }, [])

    const logout = useCallback(() => {
        setToken('')
        setUser(undefined)
    }, [])

    return (
        <UserContext.Provider value={{
            token,
            user,
            login,
            logout
        }}>
            <SWRConfig value={{
                shouldRetryOnError: false,
                errorRetryCount: 0,
                revalidateOnFocus: false,
            }}>{children}</SWRConfig>
        </UserContext.Provider>
    )
}

{/* <UserProvider> <App/> </UserProvider> */ }
