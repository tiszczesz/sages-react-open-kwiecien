import React, { useEffect, useState } from 'react'
import { useRequest } from '../../core/hooks/useRequest'
import { AlbumView } from '../../core/model/Search'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'

interface Props { }

const useFetchAlbums = () => {
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

    return [{ data: results, message, query, isLoading }, setQuery] as const
}
// https://github.com/schettino/react-request-hook
// https://swr.vercel.app/getting-started


export const MusicSearchView = (props: Props) => {

    // const albumCtrl = useFetchAlbums()
    // { albumCtrl.results && ... }

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
