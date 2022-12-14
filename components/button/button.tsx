import classnames from 'classnames'
import classes from './button.module.scss'

interface ButtonProps {
  handleClick: () => void
  children: React.ReactNode

  variant?: '' | 'primary' | 'outline'

  disabled?: boolean
  className?: string

  ariaLabel?: string
}

export const Button = ({
  disabled = false,
  handleClick,
  children,
  ariaLabel,
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
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
