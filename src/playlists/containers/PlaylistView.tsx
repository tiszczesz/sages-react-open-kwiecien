
import React, { useState } from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistForm } from '../components/PlaylistForm'
import { PlaylistList } from '../components/PlaylistList'
import { Playlist } from '../model/Playlist'


const playlistData: Playlist = {
    id: '123',
    name: 'My playlist',
    public: false,
    description: ' opis '
}

// enum Mode{
//     details = 'details',
//     edit = 'edit'
// }
// type Mode = 'details' | 'edit'


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
                    <PlaylistList />
                </div>
                <div className="col">
                    {/* {playlist.public ? 'Yes' : <p>No</p>} */}

                    {mode === 'details' ? <div>
                        <PlaylistDetails playlist={playlistData} />
                        <button className="btn btn-info" onClick={edit}>Edit</button>
                    </div> : null}

                    {mode === 'edit' && <div>
                        <PlaylistForm playlist={playlistData} />
                        <button className="btn btn-danger" onClick={cancel}>Cancel</button>
                        <button className="btn btn-success" onClick={save}>Save</button>
                    </div>}

                </div>
            </div>

        </div>
    )
}
