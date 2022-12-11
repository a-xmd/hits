import classes from './playlist-item.module.scss'

interface PlaylistItemProps {
  song?: {
    title: string
    artist: string
  }
}

export const PlaylistItem = ({ song }: PlaylistItemProps) => {
  return (
    <article className={classes['playlist-item']}>
      <div className={classes.left}></div>
      <div>
        <div className={classes.title}>
          {song ? song.title : <span>&nbsp;</span>}
        </div>
        <div className={classes['artist-container']}>
          <span>by</span> <span>{song?.artist}</span>
        </div>
      </div>
    </article>
  )
}
