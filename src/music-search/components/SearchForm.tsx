import React, { useEffect, useRef, useState } from 'react'

interface Props {
    query: string
    onSearch(query: string): void
}

export const SearchForm = ({ query: parentQuery, onSearch }: Props) => {
    const [query, setQuery] = useState(parentQuery)
    const queryRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        queryRef.current?.focus()
    }, [])

    useEffect(() => {
        const handle = setTimeout(() => {
            onSearch(query)
        }, 400)

        return () => clearTimeout(handle)
    }, [query, onSearch])

    return (
        <div>
            <div className="input-group mb-3">

                <input type="text" className="form-control"
                    value={query}
                    ref={queryRef}
                    placeholder="Search"
                    onKeyUp={e => e.code === 'Enter' && onSearch(query)}
                    onChange={e => setQuery(e.currentTarget.value)} />

                {/* <button className="btn btn-outline-secondary" 
                    onClick={() => onSearch(query)}>Search</button> */}
            </div>

        </div>
    )
}
