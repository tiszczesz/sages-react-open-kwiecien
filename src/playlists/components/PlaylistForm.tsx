import React, { useState } from 'react'
import { Playlist } from '../model/Playlist'

interface Props {
    playlist: Playlist
}

// tree.child.cild2.hooks = ['placki2']
// currentHooks = tree.child.cild2.hooks

export const PlaylistForm = ({ playlist }: Props) => {
    const [name, setName] = useState(playlist.name)

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        // console.log((event.target as any).value)
        setName((event.target as HTMLInputElement).value.replace(/\d/g, '*'))
    }

    return (
        <div>
            PlaylistForm
            {/* .form-group>label{Name:}+input.form-control */}

            <div className="form-group">
                <label htmlFor="playlist_name">Name:</label>
                <input type="text" className="form-control" id="playlist_name"
                    value={name} onChange={handleChange} />

                <p className="float-right">{name.length} / 170</p>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={playlist.public} id="playlist_public" />
                <label className="form-check-label" htmlFor="publicCheck"> Public</label>
            </div>

            <div className="form-group mt-2">
                <label htmlFor="playlist_description">Description:</label>
                <textarea className="form-control" id="playlist_description" defaultValue={playlist.description} />
            </div>

        </div>
    )
}
