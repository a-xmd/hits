import { PlaylistItem } from './playlist-item'
import type { Song } from './types'
import classes from './playlist.module.scss'

interface PlaylistProps {
  hits: (Song | null)[]

  // TODO: update
  pinnedHits: any[]
  setPinnedHits: (hits: any[]) => void
  isFetching: boolean
  limit: number
}

export const Playlist = ({
  hits,
  pinnedHits,
  setPinnedHits,
  isFetching = false,
}: PlaylistProps) => {
  return (
    <div className={classes['playlist']}>
      {pinnedHits.map((pinnedSong, itemIndex) => {
        const song = pinnedSong || hits[itemIndex]

        return (
          <PlaylistItem
            key={`id-${itemIndex}`}
            song={song}
            isFetching={!pinnedSong && isFetching}
            isPinned={!!pinnedHits[itemIndex]}
            pinHit={() => {
              setPinnedHits(
                pinnedHits.map((pinnedHit, pinnedHitIndex) => {
                  if (itemIndex === pinnedHitIndex) {
                    return song
                  }
                  return pinnedHit
                })
              )
            }}
          />
        )
      })}
    </div>
  )
}
