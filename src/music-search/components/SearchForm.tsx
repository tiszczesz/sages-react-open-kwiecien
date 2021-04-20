import React from 'react'

interface Props {

}

export const SearchForm = (props: Props) => {
    return (
        <div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search" />
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>

        </div>
    )
}
