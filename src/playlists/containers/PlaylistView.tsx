
import React, { useState } from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistForm } from '../components/PlaylistForm'
import { PlaylistList } from '../components/PlaylistList'
import { Playlist } from '../model/Playlist'


const playlistData: Playlist[] = [{
    id: '123',
    name: 'My playlist 123',
    public: false,
    description: ' opis '
}, {
    id: '234',
    name: 'My playlist 234',
    public: true,
    description: ' opis '
}, {
    id: '345',
    name: 'My playlist 345',
    public: false,
    description: ' opis '
}]



interface Props { }

export const PlaylistView = (props: Props) => {
    const [mode, setMode] = useState<'details' | 'edit'>('details')

    const edit = () => setMode('edit')
    const cancel = () => setMode('details')
    const save = () => setMode('details')

    return (
        <div>
            PlaylistView

            {/* .row>.col*2 */}
            <div className="row">
                <div className="col">
                    <PlaylistList 
                    selected="234"
                    playlists={playlistData} />
                </div>
                <div className="col">
                    {/* {playlist.public ? 'Yes' : <p>No</p>} */}

                    {mode === 'details' ? <div>
                        <PlaylistDetails playlist={playlistData[0]} />
                        <button className="btn btn-info" onClick={edit}>Edit</button>
                    </div> : null}

                    {mode === 'edit' && <div>
                        <PlaylistForm playlist={playlistData[0]} />
                        <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                        <button className="btn btn-success" onClick={save}>Save</button>
                    </div>}

                </div>
            </div>

        </div>
    )
}
