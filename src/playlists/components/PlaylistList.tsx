import React, { useState } from 'react'
import { Playlist } from '../model/Playlist'

interface Props {
    playlists: Playlist[],
    selected: Playlist['id'];
    onSelect: (id: Playlist['id']) => void
}

export const PlaylistList = ({ playlists, onSelect }: Props) => {

    const [selected, setSelected] = useState("345")

    return (
        <div>

            {/* .list-group.list-group-flush>.list-group-item.list-group-item-action*3{Text} */}
            <div className="list-group list-group-flush">

                {playlists.map((playlist, index) => (
                    <div className={
                        `list-group-item list-group-item-action ${selected === playlist.id ? 'active' : ''
                        }`} key={playlist.id} onClick={() => {
                            setSelected(playlist.id)
                            onSelect(playlist.id)
                        }}>
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