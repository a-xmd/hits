import { ChevronDownIcon, ChevronUpIcon } from '~/components'
import { Button } from '~/components'
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
  const correctedFrom = lowerBound || from
  const correctedTo = upperBound || to

  return (
    <div className={classes['year-selector-container']}>
      <Button
        disabled={year === correctedFrom}
        handleClick={() => year && callback(year - 1)}
        variant="outline"
        ariaLabel={`Decrement "from" year with one (current: ${year})`}
      >
        <ChevronDownIcon />
      </Button>

      <YearSelect
        className={classes.input}
        year={year}
        from={correctedFrom}
        to={correctedTo}
        callback={callback}
      />

      <Button
        disabled={year === correctedTo}
        handleClick={() => year < to && callback(year + 1)}
        variant="outline"
        ariaLabel={`Increment "to" year with one (current: ${year})`}
      >
        <ChevronUpIcon />
      </Button>
    </div>
  )
}
