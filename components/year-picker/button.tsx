import { PropsWithChildren } from 'react'

interface ButtonProps {
  disabled?: boolean
  handleClick: () => void
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  disabled = false,
  handleClick,
}) => {
  return (
    <button disabled={disabled} onClick={() => handleClick()}>
      {children}
    </button>
  )
}
