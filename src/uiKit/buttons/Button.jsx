import { StyledButton } from './Button.styled'

const Button = ({ children, onClick, margin, width, backGround }) => {
  return (
    <StyledButton
      onClick={onClick}
      margin={margin}
      width={width}
      backGround={backGround}
    >
      {children}
    </StyledButton>
  )
}

export default Button
