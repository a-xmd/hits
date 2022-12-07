import { YearSelector } from './year-selector'
import classes from './year-range-selector.module.scss'

interface YearRangeSelectorProps {
  startYear: number
  endYear: number
  setStartYear: (newStartYear: number) => void
  setEndYear: (newEndYear: number) => void
}

export const YearRangeSelector = ({
  startYear,
  endYear,
  setStartYear,
  setEndYear,
}: YearRangeSelectorProps) => {
  return (
    <div className={classes.container}>
      <YearSelector year={startYear} callback={setStartYear} />
      <YearSelector year={endYear} callback={setEndYear} />
    </div>
  )
}
