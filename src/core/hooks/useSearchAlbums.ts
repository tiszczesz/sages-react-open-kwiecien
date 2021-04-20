import axios from "axios"
import useSWR from "swr"
import { AlbumsSearchResponse } from "../model/Search"


export const useSearchAlbums = (query: string, token?: string) => {


    const { data, error, isValidating } = useSWR(query, (query) => {
        return axios.get<AlbumsSearchResponse>(
            'https://api.spotify.com/v1/search', {
            headers: {
                Authorization: 'Bearer ' + token
            },
            params: {
                type: 'album',
                q: query
            }

        }).then(res => res.data.albums.items)
    })

    return { data, error, loading: !(data || error) }
}