import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { PlaylistView } from './playlists/containers/PlaylistView';
import { MusicSearchView } from './music-search/containers/MusicSearchView';

function App() {
  const [showHide, setShowHide] = useState(true)

  return (
    <div className="container">
      {/* .row>.col */}

      <div className="row">
        <div className="col">

          <h1>Welcome React</h1>

          <button onClick={() => setShowHide(!showHide)}>toggle</button>

          {/* <PlaylistView /> */}
          {showHide && <MusicSearchView />}
        </div>
      </div>
    </div>
  );
}

export default App;
