import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const AddsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 26px;
  row-gap: 40px;
`

export const Add = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
`

export const Image = styled.div`
  height: 270px;
  width: 270px;
  background-color: lightgrey;
  margin: 0 0 20px 0;
  border-radius: 5px;
`

export const AddLink = styled(NavLink)`
  font-size: 22px;
  line-height: 120%;
  color: #009ee4;
  margin: 0 0 10px 0;
`

export const Price = styled.p`
  font-size: 22px;
  line-height: 150%;
  margin: 0 0 10px 0;
`

export const Details = styled.p`
  font-size: 16px;
  line-height: 130%;
  color: #5f5f5f;
  margin: 0 0 4px 0;
`
