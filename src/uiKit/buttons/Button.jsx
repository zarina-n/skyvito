import { StyledButton } from './Button.styled'

const Button = ({ children, onClick, margin, width, backGround, disabled }) => {
  return (
    <StyledButton
      onClick={onClick}
      margin={margin}
      width={width}
      backGround={backGround}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default Button
