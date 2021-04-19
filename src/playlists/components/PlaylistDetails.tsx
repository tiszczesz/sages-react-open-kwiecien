import React from 'react'
import styles from './PlaylistDetails.module.css'

// console.log(styles)

interface Props { }

const playlist = {
    id: '123',
    name: 'My playlist',
    public: false,
    description: ' opis '
}

export const PlaylistDetails = (props: Props) => {
    return (
        <div>
            {/* dl>(dt{Name:}+dd{descrip})*3 */}

            <dl id={'playlist_' + playlist.id}>
                <dt>Name:</dt>
                <dd>{playlist.name}</dd>

                <dt>Public:</dt>
                {/* <dd className="playlist-private-public" style={
                    { color: playlist.public ? 'red' : 'green' }
                }>{playlist.public ? 'Yes' : 'No'}</dd> */}

                {/* <dd className={
                    "playlistPrivatePublic " + playlist.public ? 'text-danger' : 'text-success'
                }>
                    {playlist.public ? 'Yes' : 'No'}
                </dd> */}


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
