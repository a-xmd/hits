import classes from './theme-switcher.module.scss'

export const ThemeSwitcher = () => {
  return (
    <div className={classes['theme-switcher']}>
      <button>dark</button> <button>light</button>
    </div>
  )
}
