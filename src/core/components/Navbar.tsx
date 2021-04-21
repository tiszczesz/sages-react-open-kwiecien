import React, { useContext, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

interface Props {

}

export const Navbar = (props: Props) => {
    const [showHide, setShowHide] = useState(false)

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">MusicApp</NavLink>

                    <button className="navbar-toggler" type="button" onClick={() => setShowHide(!showHide)} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse" + (showHide ? ' show ' : '')} id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/playlists">Playlists</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/search">Search</NavLink>
                            </li>

                            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/search/placki">Child</NavLink>
            </li> */}

                        </ul>
                        <div className="ml-auto nav-text text-white">

                            {/* <UserContext.Consumer>{({ user, login, logout }) => <>
                                {!user && <>Welcome Guest | <span className="btn-link" onClick={login}>Login</span></>}
                                {user && <>Welcome {user.display_name} | <span className="btn-link" onClick={logout}>Logout</span></>}
                            </>}</UserContext.Consumer> */}

                            <UserProfileWidget />

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export const UserProfileWidget = () => {
    const { login, logout, user } = useContext(UserContext)

    return useMemo(() => <>
        {!user && <>Welcome Guest | <span className="btn-link" onClick={login}>Login</span></>}
        {user && <>Welcome {user.display_name} | <span className="btn-link" onClick={logout}>Logout</span></>}
    </>, [user, login, logout])
}
