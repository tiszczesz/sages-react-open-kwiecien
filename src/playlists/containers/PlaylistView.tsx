
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
                    
                    <div>
                        <PlaylistDetails playlist={playlistData} />
                        <button className="btn btn-info">Edit</button>
                    </div>

                    <div>
                        <PlaylistForm playlist={playlistData} />
                        <button className="btn btn-danger">Cancel</button>
                        <button className="btn btn-success">Save</button>
                    </div>

                </div>
            </div>

        </div>
    )
}
