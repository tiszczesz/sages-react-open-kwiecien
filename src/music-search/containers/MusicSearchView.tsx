import { useCallback, useEffect, useState } from 'react'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'
import { useSearchAlbums } from '../../core/hooks/useSearchAlbums'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {
}

export const MusicSearchView = (props: Props) => {
    // console.log(props.location.search);
    const [query, setQuery] = useState('')
    const { data, error, loading } = useSearchAlbums(query)

    useEffect(() => {
        const params = new URLSearchParams(props.location.search);
        const q = params.get('q')
        q && setQuery(q)
    }, [props.location.search])

    const search = useCallback((query: string) => {
        props.history.push({ pathname: '/search', search: "?q=" + query })
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm query={query} onSearch={search} />
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
