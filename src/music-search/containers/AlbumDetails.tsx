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

    return (
        <div>
            <h4>Album name ....</h4>
            <small className="muted">album_id 5Tby0U5VndHW0SomYO7Id7</small>
            <div className="row">
                <div className="col">
                    {/* <AlbumCard/> */}
                </div>
                <div className="col">
                    <dl>
                        <dt>Artist</dt>
                        <dd>plackarz</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}
