import classnames from 'classnames'
import classes from './playlist-item.module.scss'

interface PlaylistItemProps {
  isFetching?: boolean

  song?: {
    title: string
    artist: string
    year: number
  }
}

export const PlaylistItem = ({ song, isFetching }: PlaylistItemProps) => {
  console.log('and', isFetching)
  return (
    <article className={classes['playlist-item']}>
      <div className={classes.left}></div>
      <div className={classes.right}>
        <div className={classes.title}>
          {song ? (
            song.title
          ) : (
            <span className={classes['mock-title']}>&nbsp;</span>
          )}
        </div>
        <div
          className={classnames(classes['artist-container'], {
            [classes['mock-artist-container']]: isFetching,
          })}
        >
          {isFetching ? (
            <span>&nbsp;</span>
          ) : (
            <>
              <span>{song?.year}</span>
              <span className={classes.artist}>{song?.artist}</span>
            </>
          )}
        </div>
      </div>
    </article>
  )
}
