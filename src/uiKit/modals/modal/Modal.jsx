import { ModalContainer, Content, CloseButton } from './Modal.styled'
import Cross from '../../icons/Cross'
import ReactDOM from 'react-dom'

const Modal = ({ children, open, onClose }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <Cross />
        </CloseButton>
      </ModalContainer>
      <Content>{children}</Content>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
