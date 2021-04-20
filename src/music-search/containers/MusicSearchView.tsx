import React from 'react'
import { AlbumsCardGrid } from '../components/AlbumsCardGrid'
import { SearchForm } from '../components/SearchForm'

interface Props {
    
}

export const MusicSearchView = (props: Props) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <SearchForm/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AlbumsCardGrid/>
                </div>
            </div>
        </div>
    )
}
