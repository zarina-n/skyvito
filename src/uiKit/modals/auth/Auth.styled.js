import styled from 'styled-components'

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 44px 45px;

  max-width: 366px;

  input {
    margin: 30px 0 0 0;
  }
`

export const LogoContainer = styled.div``

export const Logo = styled.img`
  width: 140px;
  height: 21px;
`