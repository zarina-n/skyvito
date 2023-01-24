import { SearchContainer, Input, LogoDiv } from './Search.styled'
import { Link } from 'react-router-dom'
import Button from '../../uiKit/buttons/Button'
import Logo from '../../uiKit/logo/Logo'

const Search = () => {
  return (
    <SearchContainer>
      <LogoDiv>
        <Link to="/">
          <Logo />
        </Link>
      </LogoDiv>

      <Input>
        <input type="search" placeholder="Поиск по объявлениям" name="search" />
      </Input>
      <Button
        hoverColor={'#0080C1'}
        padding={'13px 37px'}
        margin={'0 0  0 10px'}
      >
        Найти
      </Button>
    </SearchContainer>
  )
}

export default Search
