import React from 'react'
import { useAlbum } from '../../core/hooks/useSearchAlbums'
import { AlbumCard } from '../components/AlbumCard'

interface Props { }

/* TODO:
    - open http://localhost:3000/albums/5Tby0U5VndHW0SomYO7Id7
    - render AlbumDetails
    - show ID from Route params
    - fetch album from https://api.spotify.com/v1/albums/{album_id} ( useAlbum(album_id) )
    - render Album Card with album
    - render album name and artist name
    - show loader
    - show error 
    - redirect from search results to album details by clickin album cover
*/


export const AlbumDetails = (props: Props) => {
    const { data, error, loading } = useAlbum('5Tby0U5VndHW0SomYO7Id7')

    if (error) {
        return <p className="alert alert-danger">{error}</p>
    }
    if (!data) {
        return <p className="alert alert-info">Loading</p>
    }

    return (
        <div>
            <h3>{data.name}</h3>
            <small className="muted">{data.id}</small>
            <hr />
            <div className="row">

                <div className="col">
                    <AlbumCard album={data} />
                </div>

                <div className="col">
                    <dl>
                        <dt>Artist</dt>
                        <dd>{data.artists[0]?.name}</dd>

                        <dt>Release date</dt>
                        <dd>{data.release_date}</dd>
                    </dl>

                    <div className="list-group list-group-flush">
                        {data.tracks?.items.map(track => <div className="list-group-item" key={track.id}>
                            {track.name}
                        </div>)}
                    </div>
                </div>

            </div>
        </div>
    )
}
