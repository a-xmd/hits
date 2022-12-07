import { ChevronDownIcon, ChevronUpIcon, Input } from '~/components'
import { Button } from './button'
import classes from './year-range-selector.module.scss'

export const YearSelector = () => {
  return (
    <div className={classes['year-selector-container']}>
      <Button>
        <ChevronUpIcon />
      </Button>

      <div className={classes['year-selector']}>
        <Input className={classes.input} />
      </div>

      <Button>
        <ChevronDownIcon />
      </Button>
    </div>
  )
}
