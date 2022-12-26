import classnames from 'classnames'
import classes from './playlist-item.module.scss'
import { Button, PinIcon, LockClosedIcon, LockOpenedIcon } from '~/components'
import type { Song } from './types'

interface PlaylistItemProps {
  isFetching?: boolean
  isPinned: boolean

  pinHit: () => void

  song?: Song
}

interface PinButtonProps {
  isPinned: boolean

  isHidden?: boolean
  callback: () => void
  className?: string
}

const PinButton = ({
  isPinned,
  callback,
  className = '',
  isHidden = false,
}: PinButtonProps) => {
  if (isHidden) {
    return null
  }

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
  isFetching,
  isPinned = false,
  pinHit,
}: PlaylistItemProps) => {
  return (
    <article
      className={classnames(classes['playlist-item'], {
        [classes['fetching']]: isFetching,
      })}
    >
      <div className={classes.left}>
        <div className={classes['image']}>
          <img src={song?.image} />
        </div>
        <span className={classes.year}>{song?.year}</span>
      </div>
      <div className={classes.right}>
        <div className={classes['artist-and-title']}>
          <div className={classes.title}>{song?.title}</div>
          <div
            className={classnames(classes['artist-container'], {
              [classes['mock-artist-container']]: false,
            })}
          >
            <span className={classes.artist}>{song?.artist}</span>
          </div>
        </div>
        <div className={classes.lock}>
          <PinButton
            className={classes['pin-button']}
            callback={pinHit}
            isPinned={isPinned}
            isHidden={isFetching}
          />
        </div>
      </div>
    </article>
  )
}
