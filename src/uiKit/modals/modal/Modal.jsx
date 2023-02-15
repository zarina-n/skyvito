import { ModalContainer, Content, CloseButton } from './Modal.styled'
import Cross from '../../icons/Cross'
import ReactDOM from 'react-dom'

import Login from '../auth/Login'
import SignUp from '../auth/SignUp'
import NewAdd from '../addEditAdd/NewAdd'
import EditAdd from '../addEditAdd/EditAdd'
import Reviews from '../reviews/Reviews'

import { isModalOpen } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'

const Modal = ({ modal, reviews }) => {
  const dispatch = useDispatch()

  if (!modal) return null

  return ReactDOM.createPortal(
    <>
      <ModalContainer>
        <CloseButton onClick={() => dispatch(isModalOpen(false))}>
          <Cross />
        </CloseButton>
      </ModalContainer>
      <Content>
        {modal === 'login' && <Login />}
        {modal === 'sign-up' && <SignUp />}
        {modal === 'new-add' && <NewAdd />}
        {modal === 'edit-add' && <EditAdd />}
        {modal === 'reviews' && <Reviews reviews={reviews} />}
      </Content>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
