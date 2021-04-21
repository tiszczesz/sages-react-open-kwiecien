
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistForm } from '../components/PlaylistForm'
import { PlaylistList } from '../components/PlaylistList'
import { Playlist } from '../../core/model/Playlist'
import { SearchForm } from '../../music-search/components/SearchForm'
import { RouteComponentProps, useHistory, useLocation, useParams } from 'react-router'
import * as fromReducer from '../../reducers/PlaylistsReducer'
import {
    changePlaylist,
    setFilter,
    switchToEdit,
    cancel,
    saveChanged,
    saveDraft,
    removePlaylist,
    createPlaylist,
} from '../../reducers/PlaylistsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'
import { bindActionCreators } from 'redux'


const playlistData: Playlist[] = []

interface Props extends RouteComponentProps<{ playlist_id: string }> { }

export const PlaylistView = (props: Props) => {
    const dispatch = useDispatch()

    const { filter, mode } = useSelector(fromReducer.selectPlaylistsSlice)
    const playlists = useSelector(fromReducer.selectPlaylists)
    const selectedPlaylist = useSelector(fromReducer.selectSelectedPlaylist)

    const { push, replace } = useHistory()
    const { playlist_id } = useParams<{ playlist_id: string }>()

    const actions = useMemo(() => bindActionCreators({
        changePlaylist,
        setFilter,
        switchToEdit,
        cancel,
        saveChanged,
        saveDraft,
        removePlaylist,
        createPlaylist,
    }, dispatch), [])

    useEffect(() => {
        dispatch(changePlaylist(playlist_id))
    }, [playlist_id])

    const selectPlaylist = useCallback((id: Playlist['id']) => {
        push('/playlists/' + id)
    }, [])

    return useMemo(() => <div>
        <div className="row">
            <div className="col">
                <SearchForm query={filter} onSearch={actions.setFilter} />
                {filter}
                <PlaylistList
                    onSelect={selectPlaylist}
                    selected={selectedPlaylist?.id}
                    playlists={playlists}
                    onRemove={actions.removePlaylist}
                />

                <button className="btn btn-block btn-info mt-4" onClick={actions.createPlaylist}>Create new playlist</button>
            </div>
            <div className="col">

                {mode === 'details' && selectedPlaylist ?
                    <PlaylistDetails
                        playlist={selectedPlaylist}
                        onEdit={actions.switchToEdit} />
                    : null}

                {mode === 'edit' && selectedPlaylist &&
                    <PlaylistForm
                        playlist={selectedPlaylist}
                        onCancel={actions.cancel}
                        onSave={actions.saveChanged} />
                }

                {mode === 'create' && selectedPlaylist &&
                    <PlaylistForm
                        playlist={selectedPlaylist}
                        onCancel={actions.cancel}
                        onSave={actions.saveDraft} />
                }

                {!selectedPlaylist && <p className="alert alert-info">Please select playlist</p>}

            </div>
        </div>

        {/* eslint-disable-next-line react-hooks/exhaustive-deps */}
    </div>, [selectedPlaylist, playlists, mode])
}
