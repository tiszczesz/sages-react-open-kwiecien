import axios, { AxiosError } from 'axios'
import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { useOAuth2Token } from 'react-oauth2-hook'
import { SWRConfig } from 'swr'
import { UserProfile } from '../model/UserProfile'

interface UserCtx {
    token?: string
    user?: UserProfile
    login(): void
    logout(): void
}


const initialCtx: UserCtx = {
    login() { throw Error('No Provider!! ') },
    logout() { throw Error('No Provider!! ') }
}

export const UserContext = React.createContext(initialCtx)


export const useUser = () => {
    const { user } = useContext(UserContext)
    return user;
}

function isAxiosError(error: any): error is AxiosError {
    return error.isAxiosError
}

export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserCtx['user']>(undefined)
    const [needsLogin, setNeedsLogin] = useState(false)

    const [token, getToken, setToken] = useOAuth2Token({
        authorizeUrl: "https://accounts.spotify.com/authorize",
        scope: [""],
        clientID: "35402699f9104773b21aa0ac1db225d7",
        // redirectUri: document.location.href + "callback",
        redirectUri: "http://localhost:3000/callback",
    })

    const resetInterceptor = useCallback(() => {
        return axios.interceptors.request.use((config) => {
            config.headers['Authorization'] = 'Bearer ' + token;
            return config
        })
    }, [token])
    // Run callback ONLY once BEFORE all child components
    useState(resetInterceptor)

    // Deduplicate login requests
    useEffect(() => {
        if (token && needsLogin) { setNeedsLogin(false) }
        if (!needsLogin) { return }

        getToken()
    }, [needsLogin])

    const login = useCallback(() => {
        setNeedsLogin(true)
    }, [getToken])

    const logout = useCallback(() => {
        setToken('')
        setUser(undefined)
    }, [setToken, setUser])

    // Run ONLY once BEFORE all child components
    useMemo(() => {
        axios.interceptors.response.use((config) => config, error => {
            if (isAxiosError(error)) {
                if (error.response?.status === 401) {
                    login() // return axios.request(error.config)
                }
            }
            return Promise.reject(error);
        })
    }, [])

    useEffect(() => {
        if (!token) return;

        // rerun callback - eject old handler, remeber new one
        axios.interceptors.request.eject(resetInterceptor())

        axios.get<UserProfile>('https://api.spotify.com/v1/me').then(resp => {
            setUser(resp.data)
        })
    }, [token])

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

/* <UserProvider> <App/> </UserProvider> */
