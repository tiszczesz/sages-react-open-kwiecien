import axios from "axios"
import useSWR from "swr"
import { Album } from "../model/Album"
import { AlbumsSearchResponse } from "../model/Search"


export const useSearchAlbums = (query: string) => {
    const { data, error } = useSWR(query, (query) => {
        return axios.get<AlbumsSearchResponse>(
            'https://api.spotify.com/v1/search', {
            params: {
                type: 'album', q: query
            }
        }).then(res => res.data.albums.items)
    })

    return { data, error, loading: !(data || error) }
}

export const useAlbum = (album_id: string) => {
    const { data, error } = useSWR(album_id, (album_id) => {
        return axios.get<Album>('https://api.spotify.com/v1/albums/' + album_id).then(res => res.data)
    })

    return { data, error, loading: !(data || error) }
}