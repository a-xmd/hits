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

        const isPinned = !!pinnedHits[itemIndex]

        return (
          <PlaylistItem
            key={`id-${itemIndex}`}
            song={song}
            isFetching={!pinnedSong && isFetching}
            isPinned={isPinned}
            pinHit={() => {
              console.log('setting pinned hits', itemIndex)
              setPinnedHits(
                pinnedHits.map((pinnedHit, pinnedHitIndex) => {
                  if (itemIndex === pinnedHitIndex) {
                    if (isPinned) {
                      return null
                    }
                    console.log('hier dus', isPinned)
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
