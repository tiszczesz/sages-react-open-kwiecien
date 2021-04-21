import 'bootstrap/dist/css/bootstrap.css';
import { PlaylistView } from './playlists/containers/PlaylistView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';
import { OAuthCallback } from 'react-oauth2-hook'

import { Redirect, Route, Switch } from 'react-router-dom'
import { Navbar } from './core/components/Navbar';

function App() {

  return (<>
    
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
  </>
  );
}

export default App;
