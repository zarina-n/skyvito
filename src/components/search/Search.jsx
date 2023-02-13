import { SearchContainer, LogoDiv } from './Search.styled'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../uiKit/buttons/Button'
import Logo from '../../uiKit/icons/Logo'
import Input from '../../uiKit/inputs/Input'
import { useState, useEffect } from 'react'
import { getSearchValue } from '../../features/adds/addsSlice'
import { useDispatch } from 'react-redux'

const Search = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getSearchValue(search))
  }, [search, dispatch])

  return (
    <SearchContainer>
      <LogoDiv>
        <Link to="/">
          <Logo />
        </Link>
      </LogoDiv>

      {location.pathname === '/' ? (
        <>
          <Input
            placeholder={'Поиск по объявлениям'}
            type={'search'}
            width={'100%'}
            onChange={(event) => setSearch(event.target.value)}
          />

          <Button margin={'0 0  0 10px'}>Найти</Button>
        </>
      ) : (
        <Link to="/">
          <Button margin={'0 0  0 10px'}>Вернуться на главную</Button>
        </Link>
      )}
    </SearchContainer>
  )
}

export default Search
