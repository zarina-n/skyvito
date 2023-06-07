import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 40px;
  line-height: 220%;
  margin-bottom: 10px;
  margin: 43px auto;
`
export const Heading = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
  color: ${({ theme }) => theme.colors.black};
`

export const AccountForm = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 834px;
  gap: 50px;
  margin-bottom: 70px;
`

export const Image = styled.div`
  text-align: center;
  max-width: 170px;
  position: relative;

  display: flex;
  flex-direction: column;

  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.imgBackGround};
  }

  input {
    position: absolute;
    transform: translate(-10000px);
  }

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.colors.primaryBlue};
    cursor: pointer;
  }
`

export const Data = styled.div``

export const Inputs = styled.div`
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 14px;
  row-gap: 20px;

  div:focus-within label {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }

  @media (max-width: 900px) {
    flex-direction: column;

    input {
      width: 400px;
    }
  }

  @media (max-width: 700px) {
    input {
      width: 300px;
    }
  }
`

export const Label = styled.label`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #c4c4c4;

  display: flex;
  flex-direction: column;
`

export const NameSurname = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`
