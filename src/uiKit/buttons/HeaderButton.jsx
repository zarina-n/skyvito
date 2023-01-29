import { StyledHeaderButton } from './Button.styled'

const HeaderButton = ({ children, margin }) => {
  return <StyledHeaderButton margin={margin}>{children}</StyledHeaderButton>
}

export default HeaderButton
