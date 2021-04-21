import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { PlaylistView } from './playlists/containers/PlaylistView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';
import { OAuthCallback, useOAuth2Token } from 'react-oauth2-hook'

import { Redirect, Route, Switch } from 'react-router-dom'
import { SWRConfig } from 'swr';
import axios from 'axios';
import { Navbar } from './core/components/Navbar';

function App() {
  const [token, getToken, setToken] = useOAuth2Token({
    authorizeUrl: "https://accounts.spotify.com/authorize",
    scope: [""],
    clientID: "35402699f9104773b21aa0ac1db225d7",
    // redirectUri: document.location.href + "callback",
    redirectUri: "http://localhost:3000/callback",
  })

  useEffect(() => {
    const handle = axios.interceptors.request.use((config) => {
      // config.headers['Authorization'] = 'Bearer ' + token;
      return config
    })
    return () => axios.interceptors.request.eject(handle)
  }, [token])


  return (<>
    <SWRConfig value={{
      shouldRetryOnError: false,
      errorRetryCount: 0,
      revalidateOnFocus: false,
      
    }}>

      <Navbar />

      <div className="container">

        <div className="row">
          <div className="col">

            <Switch>
              <Route path="/callback" component={OAuthCallback} />
              <Redirect path="/" exact={true} to="/playlists" />

              <Route path="/playlists" component={PlaylistView} />
              <Route path="/search" component={MusicSearchView} />
            </Switch>

          </div>
        </div>
      </div>
    </SWRConfig>
  </>
  );
}

export default App;
