import React from 'react'
import { Playlist } from '../model/Playlist'
import styles from './PlaylistDetails.module.css'

// console.log(styles)

interface Props {
    // playlist: any
    playlist: Playlist
}

export const PlaylistDetails = ({ playlist }: Props) => {
    // const playlist = props.playlist
    // const { playlist } = props

    return (
        <div>
            {/* dl>(dt{Name:}+dd{descrip})*3 */}

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

        </div>
    )
}
