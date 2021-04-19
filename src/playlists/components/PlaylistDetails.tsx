import React from 'react'

interface Props {

}

const playlist = {
    id: '123', name: 'My playlist', public: true, description: ' opis '
}

export const PlaylistDetails = (props: Props) => {
    return (
        <div>
            PlaylistDetails

            {/* dl>(dt{Name:}+dd{descrip})*3 */}
            <dl>
                <dt>Name:</dt>
                <dd>nazwa</dd>

                <dt>Public:</dt>
                <dd>Yes | no </dd>

                <dt>Description:</dt>
                <dd>lubie playliste</dd>
            </dl>

        </div>
    )
}
