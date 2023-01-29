import { SearchContainer, LogoDiv } from './Search.styled'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../uiKit/buttons/Button'
import Logo from '../../uiKit/logo/Logo'
import Input from '../../uiKit/input/Input'

const Search = () => {
  const location = useLocation()
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
          />

          <Button
            hoverColor={'#0080C1'}
            padding={'13px 37px'}
            margin={'0 0  0 10px'}
          >
            Найти
          </Button>
        </>
      ) : (
        <Link to="/">
          <Button
            hoverColor={'#0080C1'}
            padding={'13px 37px'}
            margin={'0 0  0 10px'}
          >
            Вернуться на главную
          </Button>
        </Link>
      )}
    </SearchContainer>
  )
}

export default Search
