import classes from './layout.module.scss'
import { Footer } from '~/views'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className={classes.layout}>{children}</main>
      <Footer />
    </>
  )
}
