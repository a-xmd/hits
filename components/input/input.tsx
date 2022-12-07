import classnames from 'classnames'
import classes from './input.module.scss'

interface InputProps {
  className?: string
}

export const Input = ({ className = '' }: InputProps) => {
  return (
    <input
      className={classnames(classes.input, {
        [className]: !!className,
      })}
    />
  )
}
