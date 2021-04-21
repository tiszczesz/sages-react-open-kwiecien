import { combineReducers, createStore, Reducer } from "redux";
import { PlaylistsState, reducer as playlistsReducer } from './reducers/PlaylistsReducer'

export interface AppState {
    playlists: PlaylistsState
}

const counterReducer: Reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC': return state + action.payload;
        case 'DEC': return state + action.payload;
        default: return state
    }
}

// const reducer: Reducer = (state = {}, action) => {
//     return {
//         counter: counterReducer(state.counter, action),
//         playlists: playlistsReducer(state.playlists, action)
//     }
// }

const reducer = combineReducers({
    counter: counterReducer,
    playlists: playlistsReducer
})

export const store = createStore(reducer);

; (window as any).store = store;
// store.getState()
// store.subscribe(() => console.log( store.getState() ) )
// store.dispatch({type:'INC', payload:1});