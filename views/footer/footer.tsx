import classes from './footer.module.scss'

export const Footer = ({}) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        <div>© 2022 Ahmed Abbas</div>
        <div>🏗️ work in progress</div>
      </div>
    </footer>
  )
}
