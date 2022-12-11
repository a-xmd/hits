import classnames from 'classnames'
import classes from './button.module.scss'

interface ButtonProps {
  handleClick: () => void
  children: React.ReactNode

  disabled?: boolean
  className?: string
}

export const Button = ({
  disabled = false,
  handleClick,
  children,
  className = '',
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={classnames(classes.button, {
        [className]: !!className,
      })}
    >
      {children}
    </button>
  )
}
