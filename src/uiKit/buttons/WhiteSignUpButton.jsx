import { WhiteButton } from './Button.styled'

const WhiteSignUpButton = ({ children, onClick }) => {
  return (
    <WhiteButton type="button" onClick={onClick}>
      {children}
    </WhiteButton>
  )
}

export default WhiteSignUpButton
