import React, { useCallback, useState } from 'react'
import { UserProfile } from '../model/UserProfile'

interface UserCtx {
    token: string | null
    user: UserProfile | null
    login(): void
    logout(): void
}

const initialCtx: UserCtx = {
    token: null,
    user: null,
    login() { throw 'No Provider!! '},
    logout() {throw 'No Provider!! ' }
}

export const UserContext = React.createContext(initialCtx)


export const UserProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserCtx['user']>(null)

    const login = useCallback(() => {
        setUser({ display_name: 'PLacki' } as UserProfile)
    }, [])

    const logout = useCallback(() => {
        setUser(null)
    }, [])

    return (
        <UserContext.Provider value={{
            token: null,
            user,
            login,
            logout
        }}>{children}</UserContext.Provider>
    )
}

{/* <UserProvider> <App/> </UserProvider> */ }
