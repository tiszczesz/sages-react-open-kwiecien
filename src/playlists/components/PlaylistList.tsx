import React from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
    playlists: Playlist[],
    selected: Playlist['id'] | undefined
    onSelect: (id: Playlist['id']) => any
    onRemove: (id: Playlist['id']) => any
}

export const PlaylistList = React.memo(({
    playlists,
    selected: parentSelected,
    onSelect,
    onRemove
}: Props) => {

    // const [selected, setSelected] = useState(parentSelected)

    return (
        <div>
            <div className="list-group list-group-flush">
                {playlists.map((playlist, index) => (
                    <div className={
                        `list-group-item list-group-item-action ${parentSelected === playlist.id ? 'active' : ''
                        }`} key={playlist.id} onClick={() => { onSelect(playlist.id) }}>

                        {index + 1}. {playlist.name}

                        <span className="close btn btn-light" onClick={(e) => {
                            e.stopPropagation()
                            onRemove(playlist.id)
                        }}>&times;</span>
                    </div>
                ))}

            </div>

        </div>
    )
})
