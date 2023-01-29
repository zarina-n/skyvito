import { StyledButton } from './Button.styled'

const Button = ({ children, onClick, margin }) => {
  return (
    <StyledButton onClick={onClick} margin={margin}>
      {children}
    </StyledButton>
  )
}

export default Button
