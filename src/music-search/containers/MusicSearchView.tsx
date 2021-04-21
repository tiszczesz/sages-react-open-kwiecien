import React, { useState } from 'react'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'
import { useFetchAlbums } from '../../core/hooks/useFetchAlbums'
import { useSearchAlbums } from '../../core/hooks/useSearchAlbums'

interface Props {
    // token?: string
}

export const MusicSearchView = ({ }: Props) => {
    // const [result, getAlbums] = useFetchAlbums()
    const [query, setQuery] = useState('')
    const [query2, setQuery2] = useState('')
    const { data, error, loading } = useSearchAlbums(query)

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm query={query} onSearch={(query) => setQuery(query)} />
                    <SearchForm query={query2} onSearch={setQuery2} />
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
