import classnames from 'classnames'
import classes from './year-input.module.scss'

interface InputProps {
  year?: number
  className?: string
}

export const YearInput = ({ year, className = '' }: InputProps) => {
  return (
    <input
      className={classnames(classes.input, {
        [className]: !!className,
      })}
      value={year}
      onChange={() => {
        console.log('doe iets change year input')
      }}
    />
  )
}
