
import React, { useEffect, useState } from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistForm } from '../components/PlaylistForm'
import { PlaylistList } from '../components/PlaylistList'
import { Playlist } from '../../core/model/Playlist'


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
    const [mode, setMode] = useState<'details' | 'edit' | 'create'>('details')
    const [selectedId, setselectedId] = useState<Playlist['id'] | undefined>(undefined)
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | undefined>(undefined)
    const [playlists, setPlaylists] = useState(playlistData)

    useEffect(() => {
        setSelectedPlaylist(selected => playlists.find(p => p.id === selectedId))
    }, [selectedId, playlists])

    const switchToEdit = () => setMode('edit')
    const cancel = () => setMode('details')
    const saveChanged = (draft: Playlist) => {
        setPlaylists(playlists => playlists.map(p => p.id === draft.id ? draft : p))
        setMode('details')
    }
    const saveDraft = (draft: Playlist) => {
        draft.id = Math.floor(Math.random() * Date.now()).toString()
        setPlaylists(playlists => [...playlists, draft])
        setselectedId(draft.id)
        setMode('details')
    }
    const removePlaylist = (id: Playlist['id']) => {
        setPlaylists(playlists => playlists.filter(p => p.id !== id))
        setMode('details')
    }
    const changePlaylist = (id: Playlist['id']) => {
        setselectedId(id)
    }
    const createPlaylist = () => {
        setSelectedPlaylist({ id: '', description: '', name: '', public: false })
        setMode('create')
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <PlaylistList
                        onSelect={changePlaylist}
                        selected={selectedPlaylist?.id}
                        playlists={playlists}
                        onRemove={removePlaylist}
                    />

                    <button className="btn btn-block btn-info mt-4" onClick={createPlaylist}>Create new playlist</button>
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
                            onSave={saveChanged} />
                    }

                    {mode === 'create' && selectedPlaylist &&
                        <PlaylistForm
                            playlist={selectedPlaylist}
                            onCancel={cancel}
                            onSave={saveDraft} />
                    }

                    {!selectedPlaylist && <p className="alert alert-info">Please select playlist</p>}

                </div>
            </div>

        </div>
    )
}
