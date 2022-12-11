import classnames from 'classnames'
import classes from './button.module.scss'

interface ButtonProps {
  handleClick: () => void
  children: React.ReactNode

  variant?: '' | 'primary'

  disabled?: boolean
  className?: string
}

export const Button = ({
  disabled = false,
  handleClick,
  children,
  variant = '',
  className = '',
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={classnames(classes.button, {
        [classes[variant]]: !!variant,
        [className]: !!className,
      })}
    >
      {children}
    </button>
  )
}
