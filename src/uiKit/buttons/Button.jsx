import { StyledButton } from './Button.styled'

const Button = ({ children, padding, onClick, hoverColor, margin }) => {
  return (
    <StyledButton
      onClick={onClick}
      hoverColor={hoverColor}
      padding={padding}
      margin={margin}
    >
      {children}
    </StyledButton>
  )
}

export default Button
