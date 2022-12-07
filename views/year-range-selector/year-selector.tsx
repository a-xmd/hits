import { ChevronDownIcon, ChevronUpIcon, YearInput } from '~/components'
import { Button } from './button'
import classes from './year-range-selector.module.scss'

interface YearSelectorProps {
  year: number
  callback: (newYear: number) => void
}

export const YearSelector = ({ year, callback }: YearSelectorProps) => {
  return (
    <div className={classes['year-selector-container']}>
      <Button handleClick={() => callback(year + 1)}>
        <ChevronUpIcon />
      </Button>

      <div className={classes['year-selector']}>
        <YearInput className={classes.input} year={year} />
      </div>

      <Button handleClick={() => callback(year - 1)}>
        <ChevronDownIcon />
      </Button>
    </div>
  )
}
