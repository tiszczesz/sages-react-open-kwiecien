
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
    const [playlists, setPlaylists] = useState(playlistData)

    const switchToEdit = () => setMode('edit')
    const cancel = () => setMode('details')
    const save = (draft: Playlist) => {
        setPlaylists(playlists => playlists.map(p => p.id === draft.id ? draft : p))
        setSelectedPlaylist(draft)
        setMode('details')
    }

    const changePlaylist = (id: Playlist['id']) => {
        setSelectedPlaylist(playlists.find(p => p.id === id))
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <PlaylistList
                        onSelect={changePlaylist}
                        selected={selectedPlaylist?.id}
                        playlists={playlists} />

                </div>
                <div className="col">

                    {mode === 'details' && selectedPlaylist ?
                        <PlaylistDetails
                            playlist={selectedPlaylist}
                            onEdit={switchToEdit} />
                        : null}

                    {mode === 'edit' && selectedPlaylist &&
                        <PlaylistForm
                            playlist={selectedPlaylist}
                            onCancel={cancel}
                            onSave={save} />
                    }

                </div>
            </div>

        </div>
    )
}
