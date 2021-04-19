import React from 'react'

interface Props {

}

export const PlaylistForm = (props: Props) => {
    return (
        <div>
            PlaylistForm

            {/* .form-group>label{Name:}+input.form-control */}
            <div className="form-group">
                <label htmlFor="playlist_name">Name:</label>
                <input type="text" className="form-control" id="playlist_name" />
            </div>

            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="playlist_public" />
                <label className="form-check-label" htmlFor="publicCheck"> Public</label>
            </div>

            <div className="form-group mt-2">
                <label htmlFor="playlist_description">Description:</label>
                <textarea className="form-control" id="playlist_description"/>
            </div>

        </div>
    )
}
