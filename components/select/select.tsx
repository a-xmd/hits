import classnames from 'classnames'
import classes from './select.module.scss'

interface SelectProps {
  children: React.ReactNode
  className?: string
  value?: string
  handleChange: (value: string) => void
}

interface OptionProps {
  children: React.ReactNode
  value: string
}

export const Select = ({
  className = '',
  children,
  value,
  handleChange,
}: SelectProps) => {
  return (
    <div className={classes['container']}>
      <select
        className={classnames(classes.select, {
          [className]: !!className,
        })}
        value={value}
        onChange={({ currentTarget }) => handleChange(currentTarget.value)}
      >
        {children}
      </select>
    </div>
  )
}

const Option = ({ children, value }: OptionProps) => {
  return <option value={value}>{children}</option>
}

Select.Option = Option
