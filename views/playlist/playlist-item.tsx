import classnames from 'classnames'
import classes from './playlist-item.module.scss'
import { Button, PinIcon, LockClosedIcon, LockOpenedIcon } from '~/components'

interface PlaylistItemProps {
  isMock?: boolean
  isPinned: boolean

  pinHit: () => void

  song?: {
    title: string
    artist: string
    year: number
  }
}

interface PinButtonProps {
  isPinned: boolean
  callback: () => void
  className?: string
}

const PinButton = ({ isPinned, callback, className = '' }: PinButtonProps) => {
  console.log('> classname', className)
  return (
    <Button
      className={classnames(classes['icon-button'], {
        [className]: !!className,
        [classes['is-pinned']]: isPinned,
      })}
      handleClick={() => callback()}
    >
      <PinIcon />
    </Button>
  )
}

export const PlaylistItem = ({
  song,
  isMock,
  isPinned = false,
  pinHit,
}: PlaylistItemProps) => {
  return (
    <article className={classes['playlist-item']}>
      <div className={classes.left}>
        <div className={classes['image']}></div>
        <span className={classes.year}>
          {song ? song.year : <span>&nbsp;</span>}
        </span>
      </div>
      <div className={classes.right}>
        <div className={classes['artist-and-title']}>
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
        <div className={classes.lock}>
          <PinButton
            className={classes['pin-button']}
            callback={pinHit}
            isPinned={isPinned}
          />
        </div>
      </div>
    </article>
  )
}
