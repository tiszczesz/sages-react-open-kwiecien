import React, { useState } from 'react'

interface Props {
    query: string
    onSearch(query: string): void
}

export const SearchForm = ({ query: parentQuery, onSearch }: Props) => {
    const [query, setQuery] = useState(parentQuery)

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control"
                    value={query}
                    placeholder="Search" onChange={e => setQuery(e.currentTarget.value)} />

                <button className="btn btn-outline-secondary" onClick={() => onSearch(query)}>Search</button>
            </div>

        </div>
    )
}
