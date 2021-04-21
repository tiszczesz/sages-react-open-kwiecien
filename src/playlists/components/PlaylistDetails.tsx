import React from 'react'
import { Playlist } from '../../core/model/Playlist'
import styles from './PlaylistDetails.module.css'

// console.log(styles)

interface Props {
    playlist: Playlist
    onEdit: () => void
}

export const PlaylistDetails = React.memo(({ playlist, onEdit }: Props) => {
    return (
        <div>
            <dl id={'playlist_' + playlist.id} data-playlist-id={playlist.id} title={playlist.name}>
                <dt>Name:</dt>
                <dd>{playlist.name}</dd>

                <dt>Public:</dt>
                <dd className={
                    `${styles.privatePublic} ${playlist.public ? styles.public : styles.private}`
                }>
                    {playlist.public ? 'Yes' : 'No'}
                </dd>

                <dt>Description:</dt>
                <dd>{playlist.description}</dd>
            </dl>
            <button className="btn btn-info" onClick={onEdit}>Edit</button>
        </div>
    )
}, (prev, next) => prev.playlist === next.playlist)
