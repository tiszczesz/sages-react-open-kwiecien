import React, { useState } from 'react'
import { Playlist } from '../model/Playlist'

interface Props {
    playlists: Playlist[],
    selected: Playlist['id'];
}

export const PlaylistList = ({ playlists }: Props) => {

    const [selected, setSelected] = useState("234")

    return (
        <div>

            {/* .list-group.list-group-flush>.list-group-item.list-group-item-action*3{Text} */}
            <div className="list-group list-group-flush">

                {playlists.map((playlist, index) => (
                    <div className={
                        `list-group-item list-group-item-action ${selected === playlist.id ? 'active' : ''
                        }`} key={playlist.id} onClick={() => setSelected(playlist.id)}>
                        {index + 1}. {playlist.name}
                    </div>
                ))}

            </div>

        </div>
    )
}

// (x,y) => { return x + 1}
// (x) => { return x + 1}

// x => x + 1