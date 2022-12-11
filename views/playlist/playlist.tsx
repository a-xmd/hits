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
  if (!hits.length) {
    return <div>empty state</div>
  }
  return (
    <div className={classes['playlist']}>
      {hits.map((song, index) => (
        <PlaylistItem key={`id-${index}`} song={song} />
      ))}
    </div>
  )
}
