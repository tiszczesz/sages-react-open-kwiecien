import React from 'react'
import { AlbumCard } from './AlbumCard'

interface Props {

}

export const AlbumsCardGrid = (props: Props) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4 no-gutters">
                <div className="col mb-4">
                   <AlbumCard/>
                </div>
                <div className="col mb-4">
                   <AlbumCard/>
                </div>
                <div className="col mb-4">
                   <AlbumCard/>
                </div>
                <div className="col mb-4">
                   <AlbumCard/>
                </div>
            </div>
        </div>
    )
}
