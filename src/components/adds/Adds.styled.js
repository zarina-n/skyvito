import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AddsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: 26px;
  row-gap: 40px;
  margin: 43px auto;
  cursor: pointer;
`

export const Add = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 270px;
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const Image = styled.div`
  height: 270px;
  width: 270px;
  background-color: ${({ theme }) => theme.colors.imgBackGround};
  margin: 0 0 20px 0;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

export const Name = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 22px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.primaryBlue};
  margin: 0 0 10px 0;
`

export const Price = styled.p`
  font-size: 22px;
  line-height: 150%;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme.colors.black};
`

export const Details = styled.p`
  font-size: 16px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.graniteGray};
  margin: 0 0 4px 0;
`
