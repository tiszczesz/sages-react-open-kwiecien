import React from 'react'

interface Props {

}

export const PlaylistList = (props: Props) => {


    return (
        <div>

            {/* .list-group.list-group-flush>.list-group-item.list-group-item-action*3{Text} */}
            <div className="list-group list-group-flush">
                <div className="list-group-item list-group-item-action active">Text</div>
                <div className="list-group-item list-group-item-action ">Text</div>
                <div className="list-group-item list-group-item-action">Text</div>
            </div>

        </div>
    )
}
