import { Copyright, ExternalIDS, ExternalUrls, Image } from "./Search";
import { Artist } from "./Artist";
import { PagingObject } from "./PagingObject";
import { Track } from "./Track";


export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    copyrights: Copyright[];
    external_ids: ExternalIDS;
    external_urls: ExternalUrls;
    genres: any[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    tracks?: PagingObject<Track>;
    type: 'album';
    uri: string;
}


export interface AlbumView {
    id: string;
    images: Image[];
    name: string;
}
