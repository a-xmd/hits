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
  const isMock = isFetching || !hits.length
  const items = isMock ? Array(limit).fill(null) : hits

  console.log('>', isFetching)
  return (
    <div className={classes['playlist']}>
      {items.map((song, index) => (
        <PlaylistItem
          key={`id-${index}`}
          index={index + 1}
          song={song}
          isMock={isMock}
        />
      ))}
    </div>
  )
}
