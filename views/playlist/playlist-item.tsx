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

export const PlaylistItem = ({ song }: PlaylistItemProps) => {
  return (
    <article className={classes['playlist-item']}>
      <div className={classes.left}></div>
      <div className={classes.right}>
        <div className={classes.title}>
          {song ? song.title : <span>&nbsp;</span>}
        </div>
        <div className={classes['artist-container']}>
          <span>{song?.year}</span>
          <span className={classes.artist}>{song?.artist}</span>
        </div>
      </div>
    </article>
  )
}
