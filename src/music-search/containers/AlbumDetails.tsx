import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { useAlbum } from '../../core/hooks/useSearchAlbums'
import { Track } from '../../core/model/Track'
import { AlbumCard } from '../components/AlbumCard'

interface Props { }

/* TODO:
    - open http://localhost:3000/albums/5Tby0U5VndHW0SomYO7Id7
    - render AlbumDetails
    - show ID from Route params
    - fetch album from https://api.spotify.com/v1/albums/{album_id} ( useAlbum(album_id) )
    - render Album Card with album
    - render album name and artist name
    - show loader
    - show error 
    - redirect from search results to album details by clickin album cover
*/


export const AlbumDetails = (props: Props) => {
    const { album_id } = useParams<{ album_id: string }>()
    const { data, error, loading } = useAlbum(album_id)
    const [track, setTrack] = useState<Track | null>(null)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (!audioRef.current) return;
        audioRef.current.volume = 0.1;
        audioRef.current.play()
    }, [track])

    if (error) {
        return <p className="alert alert-danger">{error}</p>
    }
    if (!data) {
        return <p className="alert alert-info">Loading</p>
    }

    const playTrack = (track: Track) => {
        setTrack(track)
    }

    return (
        <div>
            <h3>{data.name}</h3>
            <small className="muted">{data.id}</small>
            <hr />
            <div className="row">

                <div className="col">
                    <AlbumCard album={data} />
                </div>

                <div className="col">
                    <dl>
                        <dt>Artist</dt>
                        <dd>{data.artists[0]?.name}</dd>

                        <dt>Release date</dt>
                        <dd>{data.release_date}</dd>
                    </dl>

                    <hr />
                    <audio className="w-100" controls={true} src={track?.preview_url} ref={audioRef} />
                    <hr />

                    <div className="list-group list-group-flush">
                        {data.tracks?.items.map(track =>
                            <div className="list-group-item" key={track.id} onClick={() => playTrack(track)}>
                                {track.name}
                            </div>)}
                    </div>
                </div>

            </div>
        </div>
    )
}
