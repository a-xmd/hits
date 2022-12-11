import { PlaylistItem } from './playlist-item'
import classes from './playlist.module.scss'

interface PlaylistProps {
  hits: any[]
  isFetching: boolean
  limit: number
}

export const Playlist = ({
  hits,
  isFetching = false,
  limit,
}: PlaylistProps) => {
  const items = isFetching ? Array(limit).fill(null) : hits
  return (
    <div className={classes['playlist']}>
      {items.map((song, index) => (
        <PlaylistItem key={`id-${index}`} song={song} isFetching={isFetching} />
      ))}
    </div>
  )
}
