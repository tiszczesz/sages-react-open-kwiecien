import React, { useState } from 'react'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'
import { useFetchAlbums } from '../../core/hooks/useFetchAlbums'
import { useSearchAlbums } from '../../core/hooks/useSearchAlbums'

interface Props {
    token?: string
}

export const MusicSearchView = ({ token }: Props) => {
    // const [result, getAlbums] = useFetchAlbums()
    const [query, setQuery] = useState('')
    const { data, error, loading } = useSearchAlbums(query, token)

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm query={query} onSearch={setQuery} />
                </div>
            </div>
            <div className="row">
                <div className="col">

                    {error && <p className="alert alert-danger">{error.message}</p>}
                    {query && loading && <p className="alert alert-info">Loading..</p>}

                    {data && <AlbumsCardGrid albums={data} />}
                </div>
            </div>
        </div>
    )
}
