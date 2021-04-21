import { Reducer, ReducerAction, useEffect, useMemo, useReducer } from "react"
import { Playlist } from "../../core/model/Playlist";

const playlistData: Playlist[] = [{
    id: '123',
    name: 'Reducer playlist 123',
    public: false,
    description: ' opis '
}, {
    id: '234',
    name: 'Reducer playlist 234',
    public: true,
    description: ' opis '
}, {
    id: '345',
    name: 'Reducer playlist 345',
    public: false,
    description: ' opis '
}]

interface PlaylistsState {
    mode: 'details' | 'edit' | 'create'
    selectedId: string | null
    // selectedPlaylist
    playlists: Playlist[]
    filter: string
}

type Actions =
    | PLAYLISTS_LOAD
    | PLAYLISTS_SELECT
    | PLAYLISTS_CANCEL
    | PLAYLISTS_EDIT
    | PLAYLISTS_CREATE
    | PLAYLISTS_UPDATE
    | PLAYLISTS_ADD
    | PLAYLISTS_REMOVE
    | PLAYLISTS_FILTER

const initialState: PlaylistsState = {
    mode: 'details',
    selectedId: null,
    playlists: playlistData,
    filter: ''
}

const reducer: Reducer<PlaylistsState, Actions> = (state, action) => {

    switch (action.type) {
        case 'PLAYLISTS_LOAD': return { ...state, playlists: action.payload };
        case 'PLAYLISTS_SELECT': return { ...state, selectedId: action.payload.id, mode: 'details' };
        case 'PLAYLISTS_CANCEL': return { ...state, selectedId: null, mode: 'details' };
        case 'PLAYLISTS_EDIT': return { ...state, mode: 'edit' };
        case 'PLAYLISTS_FILTER': return { ...state, filter: action.payload };
        case 'PLAYLISTS_CREATE': return { ...state, mode: 'create' };
        case 'PLAYLISTS_UPDATE': {
            const draft = action.payload
            return { ...state, mode: 'details', playlists: state.playlists.map(p => p.id === draft.id ? draft : p) };
        }
        case 'PLAYLISTS_ADD': {
            const draft = action.payload
            return { ...state, mode: 'details', playlists: [...state.playlists, draft], selectedId: draft.id };
        }
        case 'PLAYLISTS_REMOVE': {
            return { ...state, mode: 'details', playlists: state.playlists.filter(p => p.id !== action.payload.id) };
        }

        default: return state;
    }
}


export const usePlaylistsReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const selectedPlaylist = useMemo(() => {
        return state.playlists.find(p => p.id === state.selectedId)
    }, [state.selectedId])

    return [{
        ...state, selectedPlaylist
    }, dispatch] as const
}

export const changePlaylist = (id: Playlist['id']): PLAYLISTS_SELECT => ({
    type: 'PLAYLISTS_SELECT', payload: { id }
})
export const setFilter = (payload: string): PLAYLISTS_FILTER => ({
    type: 'PLAYLISTS_FILTER', payload
})
export const switchToEdit = (): PLAYLISTS_EDIT => ({
    type: 'PLAYLISTS_EDIT'
})
export const cancel = (): PLAYLISTS_CANCEL => ({
    type: 'PLAYLISTS_CANCEL'
})
export const saveChanged = (payload: Playlist): PLAYLISTS_UPDATE => ({
    type: 'PLAYLISTS_UPDATE', payload
})
export const saveDraft = (payload: Playlist): PLAYLISTS_ADD => {
    payload.id = Math.floor(Math.random() * Date.now()).toString()
    return ({
        type: 'PLAYLISTS_ADD', payload
    })
}
export const removePlaylist = (id: Playlist['id']): PLAYLISTS_REMOVE => ({
    type: 'PLAYLISTS_REMOVE', payload: { id }
})
export const createPlaylist = (): PLAYLISTS_CREATE => ({
    type: 'PLAYLISTS_CREATE'
})


interface PLAYLISTS_FILTER { type: 'PLAYLISTS_FILTER', payload: string }
interface PLAYLISTS_LOAD { type: 'PLAYLISTS_LOAD', payload: Playlist[] }
interface PLAYLISTS_SELECT { type: 'PLAYLISTS_SELECT', payload: { id: Playlist['id'] } }

interface PLAYLISTS_CANCEL { type: 'PLAYLISTS_CANCEL' }
interface PLAYLISTS_EDIT { type: 'PLAYLISTS_EDIT' }
interface PLAYLISTS_CREATE { type: 'PLAYLISTS_CREATE' }

interface PLAYLISTS_UPDATE { type: 'PLAYLISTS_UPDATE', payload: Playlist }
interface PLAYLISTS_ADD { type: 'PLAYLISTS_ADD', payload: Playlist }
interface PLAYLISTS_REMOVE { type: 'PLAYLISTS_REMOVE', payload: { id: Playlist['id'] } }