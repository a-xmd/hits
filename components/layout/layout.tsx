import classes from './layout.module.scss'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className={classes.layout}>{children}</main>
    </>
  )
}
