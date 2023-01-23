import { StyledButton } from './Button.styled'

const Button = ({ children, padding, onClick, hoverColor }) => {
  return (
    <StyledButton onClick={onClick} hoverColor={hoverColor} padding={padding}>
      {children}
    </StyledButton>
  )
}

export default Button
