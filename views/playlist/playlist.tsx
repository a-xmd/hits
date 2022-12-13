import { PlaylistItem } from './playlist-item'
import classes from './playlist.module.scss'

interface PlaylistProps {
  hits: any[]
  pinnedHits: boolean[]
  setPinnedHits: (hits: boolean[]) => void
  isFetching: boolean
  limit: number
}

export const Playlist = ({
  hits,
  isFetching = false,
  pinnedHits,
  setPinnedHits,
  limit,
}: PlaylistProps) => {
  const isMock = isFetching || !hits.length
  const items = isMock ? Array(limit).fill(null) : hits

  return (
    <div className={classes['playlist']}>
      {items.map((song, itemIndex) => (
        <PlaylistItem
          key={`id-${itemIndex}`}
          song={song}
          isMock={isMock}
          isPinned={pinnedHits[itemIndex]}
          pinHit={() => {
            setPinnedHits(
              pinnedHits.map((isPinned, pinnedHitIndex) =>
                pinnedHitIndex === itemIndex ? !isPinned : isPinned
              )
            )
          }}
        />
      ))}
    </div>
  )
}
