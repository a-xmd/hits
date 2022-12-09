import { ChevronDownIcon, ChevronUpIcon } from '~/components'
import { Button } from './button'
import { YearSelect } from './year-select'
import classes from './year-picker.module.scss'

interface SingleYearPickerProps {
  year: number
  from: number
  to: number
  lowerBound?: number
  upperBound?: number
  callback: (newYear: number) => void
}

export const SingleYearPicker = ({
  year,
  from,
  to,
  lowerBound,
  upperBound,
  callback,
}: SingleYearPickerProps) => {
  return (
    <div className={classes['year-selector-container']}>
      <Button
        disabled={year === from}
        handleClick={() => year && callback(year - 1)}
      >
        <ChevronDownIcon />
      </Button>

      <YearSelect
        className={classes.input}
        year={year}
        from={lowerBound || from}
        to={upperBound || to}
        callback={callback}
      />

      <Button
        disabled={year === to}
        handleClick={() => year < to && callback(year + 1)}
      >
        <ChevronUpIcon />
      </Button>
    </div>
  )
}
