import React, { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { PlaylistView } from './playlists/containers/PlaylistView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';
import { OAuthCallback, useOAuth2Token } from 'react-oauth2-hook'

import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom'

function App() {
  const [showHide, setShowHide] = useState(false)
  const [token, getToken] = useOAuth2Token({
    authorizeUrl: "https://accounts.spotify.com/authorize",
    scope: [""],
    clientID: "35402699f9104773b21aa0ac1db225d7",
    // redirectUri: document.location.href + "callback",
    redirectUri: "http://localhost:3000/callback",
  })


  if (window.location.pathname.includes('/callback')) {
    return <OAuthCallback />
  }

  return (<>
    {/* <SWRConfig value={{}}></SWRConfig> */}


    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
      <div className="container">
        <a className="navbar-brand" href="#">MusicApp</a>

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

            <li className="nav-item">
              <NavLink className="nav-link" to="/search/placki" activeClassName="active placki">Child</NavLink>
            </li>

          </ul>
          <div className="ml-auto nav-text">
            <a href="#" onClick={getToken}>Login</a>
          </div>
        </div>
      </div>
    </nav>

    <div className="container">
      {/* .row>.col */}

      <div className="row">
        <div className="col">

          <Switch>
            <Redirect path="/" exact={true} to="/playlists" />

            <Route path="/playlists" component={PlaylistView} />
            <Route path="/search/placki" component={MusicSearchView} />
            <Route path="/search" component={MusicSearchView} />

          </Switch>

        </div>
      </div>
    </div>
  </>
  );
}

export default App;
