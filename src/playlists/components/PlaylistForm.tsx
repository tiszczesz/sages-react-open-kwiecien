import React, { useState } from 'react'
import { Playlist } from '../model/Playlist'

interface Props {
    playlist: Playlist
    onCancel: () => void
    onSave: (draft: Playlist) => void
}

// tree.child.cild2.hooks = ['placki2']
// currentHooks = tree.child.cild2.hooks

export const PlaylistForm = ({ playlist, onCancel, onSave }: Props) => {
    const [name, setName] = useState(playlist.name)
    const [isPublic, setIsPublic] = useState(playlist.public)
    const [description, setDescription] = useState(playlist.description)

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        setName(event.currentTarget.value.replace(/\d/g, '*'))
    }

    const handleSave = () => {
        // { name, isPublic, description },
        onSave({
            ...playlist, name, public: isPublic, description
        })
    }

    return (
        <div>
            <pre>{JSON.stringify({ ...playlist, name, isPublic, description }, null, 2)}</pre>

            <div className="form-group">
                <label htmlFor="playlist_name">Name:</label>
                <input type="text" className="form-control" id="playlist_name"
                    value={name} onChange={handleChange} />

                <p className="float-right">{name.length} / 170</p>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked={playlist.public} id="playlist_public"
                    onChange={() => setIsPublic(!isPublic)} />
                <label className="form-check-label" htmlFor="publicCheck"> Public</label>
            </div>

            <div className="form-group mt-2">
                <label htmlFor="playlist_description">Description:</label>
                <textarea className="form-control" id="playlist_description" defaultValue={playlist.description}
                    onChange={event => setDescription(event.currentTarget.value)} />
            </div>
            <button className="btn btn-danger" onClick={onCancel}>Cancel</button>
            <button className="btn btn-success" onClick={handleSave}>Save</button>
        </div>
    )
}
