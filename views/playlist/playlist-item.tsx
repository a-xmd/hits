import classnames from 'classnames'
import classes from './playlist-item.module.scss'

interface PlaylistItemProps {
  index: number
  isMock?: boolean

  song?: {
    title: string
    artist: string
    year: number
  }
}

export const PlaylistItem = ({ song, isMock, index }: PlaylistItemProps) => {
  return (
    <article className={classes['playlist-item']}>
      <div className={classes.index}>{index}</div>
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
            [classes['mock-artist-container']]: isMock,
          })}
        >
          {isMock ? (
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
