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
      <div className={classes.left}>
        <div className={classes['image']}></div>
        <span className={classes.year}>
          {song ? song.year : <span>&nbsp;</span>}
        </span>
      </div>
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
              <span className={classes.artist}>{song?.artist}</span>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

/* <div className={classes.index}>{index}</div> */
