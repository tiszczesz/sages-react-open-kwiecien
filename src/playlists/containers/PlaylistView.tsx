
import React from 'react'
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


interface Props { }

export const PlaylistView = (props: Props) => {
    return (
        <div>
            PlaylistView

            {/* .row>.col*2 */}
            <div className="row">
                <div className="col">
                    <PlaylistList />
                </div>
                <div className="col">
                    <PlaylistDetails playlist={playlistData} />

                    <PlaylistForm playlist={playlistData} />
                </div>
            </div>

        </div>
    )
}
