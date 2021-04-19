
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
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>(playlistData[2])

    const edit = () => setMode('edit')
    const cancel = () => setMode('details')
    const save = () => setMode('details')

    const changePlaylist = (id: Playlist['id']) => {
        console.log(id)
        setSelectedPlaylist(playlistData.find(p => p.id === id))
    }

    return (
        <div>
            PlaylistView

            {/* .row>.col*2 */}
            <div className="row">
                <div className="col">
                    <PlaylistList
                        onSelect={changePlaylist}
                        selected={selectedPlaylist?.id}
                        playlists={playlistData} />
                        
                </div>
                <div className="col">
                    {/* {playlist.public ? 'Yes' : <p>No</p>} */}

                    {mode === 'details' && selectedPlaylist ? <div>
                        <PlaylistDetails playlist={selectedPlaylist} />
                       
                    </div> : null}

                    {mode === 'edit' && selectedPlaylist && <div>
                        <PlaylistForm playlist={selectedPlaylist} />
                      
                    </div>}

                </div>
            </div>

        </div>
    )
}
