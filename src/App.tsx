import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { PlaylistView } from './playlists/containers/PlaylistView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';

function App() {
  return (
    <div className="container">
      {/* .row>.col */}
      
      <div className="row">
        <div className="col">

          <h1>Welcome React</h1>

          {/* <PlaylistView /> */}
          <MusicSearchView/>
        </div>
      </div>
    </div>
  );
}

export default App;
