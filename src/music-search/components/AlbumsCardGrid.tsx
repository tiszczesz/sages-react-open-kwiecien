import React from 'react'
import { useHistory } from 'react-router'
import { AlbumView } from "../../core/model/Album"
import { AlbumCard } from './AlbumCard'

interface Props {
    albums: AlbumView[]
}

export const AlbumsCardGrid = ({ albums }: Props) => {

    const history = useHistory()

    const goToAlbum = (album_id: string) => {
        history.push('/albums/' + album_id)
    }

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4 no-gutters">
                {albums.map(album => <div className="col mb-4" key={album.id} onClick={() => goToAlbum(album.id)}>
                    <AlbumCard album={album} />
                </div>)}

            </div>
        </div>
    )
}
