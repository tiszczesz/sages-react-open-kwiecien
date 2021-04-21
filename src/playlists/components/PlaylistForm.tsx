import React, { useEffect, useRef, useState } from 'react'
import { Playlist } from '../../core/model/Playlist'

interface Props {
    playlist: Playlist
    onCancel: () => void
    onSave: (draft: Playlist) => void
}


export const PlaylistForm = React.memo(({ playlist, onCancel, onSave }: Props) => {
    const [name, setName] = useState(playlist.name)
    const [isPublic, setIsPublic] = useState(playlist.public)
    const [description, setDescription] = useState(playlist.description)

    console.log('render');


    const handleSave = () => {
        onSave({ ...playlist, name, public: isPublic, description })
    }

    const nameInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setName(playlist.name)
        setIsPublic(playlist.public)
        setDescription(playlist.description)
    }, [playlist])

    useEffect(() => {
        nameInputRef.current?.focus()
    }, [])

    return (
        <div>
            <pre>{JSON.stringify({ ...playlist, name, isPublic, description }, null, 2)}</pre>

            <div className="form-group">
                <label htmlFor="playlist_name">Name:</label>

                <input type="text" className="form-control" id="playlist_name" ref={nameInputRef}
                    value={name} onChange={e => setName(e.target.value)} />

                <p className="float-right">{name.length} / 170</p>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="playlist_public"
                    checked={isPublic}
                    onChange={() => setIsPublic(!isPublic)} />
                <label className="form-check-label" htmlFor="publicCheck"> Public</label>
            </div>

            <div className="form-group mt-2">
                <label htmlFor="playlist_description">Description:</label>
                <textarea className="form-control" id="playlist_description"
                    value={description}
                    onChange={event => setDescription(event.currentTarget.value)} />
            </div>
            <button className="btn btn-danger" onClick={onCancel}>Cancel</button>
            <button className="btn btn-success" onClick={handleSave}>Save</button>
        </div>
    )
})
