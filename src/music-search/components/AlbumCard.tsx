import React from 'react'
import { AlbumView } from '../../core/model/Search'

interface Props {
    album: AlbumView
}

export const AlbumCard = ({album}: Props) => {

    return (
        <div className="card">
            <img src={album.images[0].url} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
            </div>
        </div>
    )
}
