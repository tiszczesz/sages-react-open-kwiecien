import React, { useEffect, useState } from 'react'
import { AlbumView } from '../../core/model/Search'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'

interface Props {

}

// const albumsMock: AlbumView[] = [
//     { id: "123", name: "Album 123", images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/300/300' }] },
//     { id: "234", name: "Album 234", images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/400/400' }] },
//     { id: "345", name: "Album 345", images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/500/500' }] },
//     { id: "456", name: "Album 456", images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/600/600' }] },
// ]

/* 
    TODO:
    - show mock albums in grid each in album card
    - console.log query in parent when 'search' was cliked in form
    - start with no results [] and switch to mocks when 'search' clicked
*/

export const MusicSearchView = (props: Props) => {
    const [results, setResults] = useState<AlbumView[]>([])
    const [query, setQuery] = useState('')

    const searchAlbums = (query: string) => {
        console.log(query)
        setQuery(query)
    }

    useEffect(() => {
        if (!query) return;

        fetch('http://localhost:3000/data/albums.json?q=' + query)
            .then(resp => resp.json())
            .then(data => setResults(data))
            // .then(resp => console.log(resp))

    }, [query])

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm query={query} onSearch={searchAlbums} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AlbumsCardGrid albums={results} />
                </div>
            </div>
        </div>
    )
}
