import classnames from 'classnames'
import { Select } from '~/components'
import classes from './year-picker.module.scss'

interface YearSelectProps {
  year: number | null
  className?: string
  from: number
  to: number
  callback: (year: number) => void
}

export const YearSelect = ({ year, from, to, callback }: YearSelectProps) => {
  const years = Array(to - from + 1)
    .fill(null)
    .map((_, index) => from + index)

  return (
    <Select
      value={year?.toString()}
      handleChange={(val) => callback(parseInt(val))}
    >
      {years.map((year) => {
        return (
          <Select.Option key={year} value={year.toString()}>
            {year}
          </Select.Option>
        )
      })}
    </Select>
  )
}
