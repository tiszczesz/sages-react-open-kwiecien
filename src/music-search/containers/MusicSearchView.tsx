import React from 'react'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'
import { useFetchAlbums } from '../../core/hooks/useFetchAlbums'

interface Props { }




export const MusicSearchView = (props: Props) => {
    const [result, getAlbums] = useFetchAlbums()

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm query={result.query} onSearch={getAlbums} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {result.message && <p className="alert alert-danger">{result.message}</p>}
                    {result.isLoading && <p className="alert alert-info">Loading..</p>}

                    {result.data && <AlbumsCardGrid albums={result.data} />}
                </div>
            </div>
        </div>
    )
}
