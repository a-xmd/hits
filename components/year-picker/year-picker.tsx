import classnames from 'classnames'
import { SingleYearPicker } from './single-year-picker'
import classes from './year-picker.module.scss'

type SetYear = (year: number) => void

interface YearRangeSelectorProps {
  className?: string
  startYear: number
  selectedStartYear: number
  setSelectedStartYear: SetYear

  endYear: number
  selectedEndYear: number
  setSelectedEndYear: SetYear
}

export const YearPicker = ({
  startYear,
  selectedStartYear,
  setSelectedStartYear,
  endYear,
  selectedEndYear,
  setSelectedEndYear,
  className = '',
}: YearRangeSelectorProps) => {
  return (
    <div
      className={classnames(classes.container, {
        [className]: !!className,
      })}
    >
      <SingleYearPicker
        year={selectedStartYear}
        from={startYear}
        to={endYear}
        callback={setSelectedStartYear}
        upperBound={selectedEndYear}
      />
      <SingleYearPicker
        year={selectedEndYear}
        from={startYear}
        to={endYear}
        callback={setSelectedEndYear}
        lowerBound={selectedStartYear}
      />
    </div>
  )
}
