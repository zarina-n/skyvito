import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CloseButton = styled.div`
  svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.lightSilver};
    cursor: pointer;

    position: fixed;
    right: 5%;
    top: 7%;

    &:hover {
      fill: ${({ theme }) => theme.colors.primaryBlue};
    }
  }
`
