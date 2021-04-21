import { useEffect, useState } from 'react';
import { useRequest } from './useRequest';
import { AlbumView } from "../model/Album";

export const useFetchAlbums = () => {
    const [query, setQuery] = useState('albums');
    const {
        results,
        message,
        isLoading,
        execute
    } = useRequest<AlbumView[]>(`http://localhost:3000/data/album.json`, {});


    useEffect(() => {
        execute(`http://localhost:3000/data/${query}.json`, {});
    }, [query]);

    return [{ data: results, message, query, isLoading }, setQuery] as const;
};


// https://github.com/schettino/react-request-hook
// https://swr.vercel.app/getting-started