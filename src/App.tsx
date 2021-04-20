import React, { Fragment, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { PlaylistView } from './playlists/containers/PlaylistView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';
import { OAuthCallback, useOAuth2Token } from 'react-oauth2-hook'



function App() {
  const [token, getToken] = useOAuth2Token({
    authorizeUrl: "https://accounts.spotify.com/authorize",
    scope: [""],
    clientID: "35402699f9104773b21aa0ac1db225d7",
    // redirectUri: document.location.href + "callback",
    redirectUri: "http://localhost:3000/callback",
  })

  const [showHide, setShowHide] = useState(true)

  return (<>
    {/* <SWRConfig value={{}}></SWRConfig> */}
    {token && <OAuthCallback />}

    <div className="container">
      <div className="row">
        <div className="col"><a href="#" onClick={getToken}>Login</a></div>
      </div>
    </div>
    <div className="container">
      {/* .row>.col */}

      <div className="row">
        <div className="col">

          <h1>Welcome React</h1>

          <button onClick={() => setShowHide(!showHide)}>toggle</button>

          {/* <PlaylistView /> */}
          {showHide && <MusicSearchView token={token} />}
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
