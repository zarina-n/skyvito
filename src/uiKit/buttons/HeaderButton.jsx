import { StyledHeaderButton } from './Button.styled'

const HeaderButton = ({ children, margin, onClick }) => {
  return (
    <StyledHeaderButton margin={margin} onClick={onClick}>
      {children}
    </StyledHeaderButton>
  )
}

export default HeaderButton
