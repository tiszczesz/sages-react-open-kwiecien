import React from 'react'
import { AlbumView } from '../../core/model/Search'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'

interface Props {

}

const albumsMock: AlbumView[] = [
    { id: "123", name: "Album 123", images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/300/300' }] },
    { id: "234", name: "Album 234", images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/400/400' }] },
    { id: "345", name: "Album 345", images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/500/500' }] },
    { id: "456", name: "Album 456", images: [{ height: 300, width: 300, url: 'https://www.placecage.com/c/600/600' }] },
]

export const MusicSearchView = (props: Props) => {

    const searchAlbums = (query: string) => {
        console.log(query)
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AlbumsCardGrid />
                </div>
            </div>
        </div>
    )
}