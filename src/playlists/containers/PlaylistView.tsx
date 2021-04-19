
// tsrafc

import React from 'react'
import { PlaylistDetails } from '../components/PlaylistDetails'
import { PlaylistForm } from '../components/PlaylistForm'
import { PlaylistList } from '../components/PlaylistList'

interface Props {

}

export const PlaylistView = (props: Props) => {
    return (
        <div>
            PlaylistView

            {/* .row>.col*2 */}
            <div className="row">
                <div className="col">
                    <PlaylistList />
                </div>
                <div className="col">
                    <PlaylistDetails />
                    <PlaylistForm />
                </div>
            </div>

        </div>
    )
}
