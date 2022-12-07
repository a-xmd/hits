import { PropsWithChildren } from 'react'

interface ButtonProps {
  handleClick: () => void
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  handleClick,
}) => {
  return <button onClick={() => handleClick()}>{children}</button>
}
