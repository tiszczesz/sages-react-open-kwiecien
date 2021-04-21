import { ExternalUrls } from "./Search";
import { Artist } from "./Artist";


export interface Track {
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    preview_url: string;
    track_number: number;
    type: 'track';
    uri: string;
}
