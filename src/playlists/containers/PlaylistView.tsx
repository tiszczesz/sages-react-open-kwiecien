
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistForm } from '../components/PlaylistForm'
import { PlaylistList } from '../components/PlaylistList'
import { Playlist } from '../../core/model/Playlist'
import { SearchForm } from '../../music-search/components/SearchForm'
import { RouteComponentProps, useHistory, useLocation, useParams } from 'react-router'
import * as fromReducer from '../reducers/PlaylistsReducer'


const playlistData: Playlist[] = []



interface Props extends RouteComponentProps<{ playlist_id: string }> { }

export const PlaylistView = (props: Props) => {
    const [{
        filter, mode, playlists, selectedId, selectedPlaylist
    }, dispatch] = fromReducer.usePlaylistsReducer()

    const { push, replace } = useHistory()
    const { playlist_id } = useParams<{ playlist_id: string }>()

    useEffect(() => {
        dispatch(fromReducer.changePlaylist(playlist_id))
    }, [playlist_id])

    const changePlaylist = useCallback((id: Playlist['id']) => {
        push('/playlists/' + id)
    }, [])

    const setFilter = useCallback((filter: string) => { dispatch(fromReducer.setFilter(filter)) }, []);
    const switchToEdit = useCallback(() => { dispatch(fromReducer.switchToEdit()) }, []);
    const cancel = useCallback(() => { dispatch(fromReducer.cancel()) }, []);
    const saveChanged = useCallback((payload: Playlist) => { dispatch(fromReducer.saveChanged(payload)) }, []);
    const saveDraft = useCallback((payload: Playlist) => { dispatch(fromReducer.saveDraft(payload)) }, []);
    const removePlaylist = useCallback((id: Playlist['id']) => { dispatch(fromReducer.removePlaylist(id)) }, []);
    const createPlaylist = useCallback(() => { dispatch(fromReducer.createPlaylist()) }, []);

    return useMemo(() => <div>
        <div className="row">
            <div className="col">
                <SearchForm query={filter} onSearch={setFilter} />
                {filter}
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

        {/* eslint-disable-next-line react-hooks/exhaustive-deps */}
    </div>, [selectedPlaylist, playlists, mode])
}
