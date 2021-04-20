import React, { useEffect, useState } from 'react'
import { useRequest } from '../../core/hooks/useRequest'
import { AlbumView } from '../../core/model/Search'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'

interface Props { }


export const MusicSearchView = (props: Props) => {
    const [query, setQuery] = useState('albums')
    const {
        results,
        message,
        isLoading,
        execute
    } = useRequest<AlbumView[]>(`http://localhost:3000/data/album.json`, {})


    useEffect(() => {
        execute(`http://localhost:3000/data/${query}.json`, {})
    }, [query])

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm query={query} onSearch={setQuery} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {message && <p className="alert alert-danger">{message}</p>}
                    {isLoading && <p className="alert alert-info">Loading..</p>}

                    {results && <AlbumsCardGrid albums={results} />}
                </div>
            </div>
        </div>
    )
}
