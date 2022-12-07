import { YearSelector } from './year-selector'
import classes from './year-range-selector.module.scss'

export const YearRangeSelector = ({}) => {
  return (
    <div className={classes.container}>
      <YearSelector />
      <YearSelector />
    </div>
  )
}
