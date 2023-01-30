import { ModalContainer, Content, CloseButton } from './Modal.styled'
import Cross from '../../icons/Cross'

const Modal = ({ children, open, onClose }) => {
  return (
    <ModalContainer open={open}>
      <Content>{children}</Content>
      <CloseButton onClick={onClose}>
        <Cross />
      </CloseButton>
    </ModalContainer>
  )
}

export default Modal
