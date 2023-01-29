import Adds from '../../components/adds/Adds'
import Button from '../../uiKit/buttons/Button'
import {
  Title,
  Heading,
  SellerInfo,
  Image,
  About,
  Name,
  Details,
} from './Seller.styled'

const Seller = () => {
  const seller = {
    sellerName: 'Кирилл Матвеев',
    city: 'Санкт-Петербург',
    sellerOnSiteSince: 'Продает товары с августа 2021',
    phone: '123456789',
  }
  return (
    <>
      <Title>Профиль продавца</Title>
      <SellerInfo>
        <Image></Image>
        <About>
          <Name>{seller.sellerName}</Name>
          <Details>{seller.city}</Details>
          <Details>{seller.sellerOnSiteSince}</Details>

          <Button hoverColor="#0080C1" padding={'10px 37px'}>
            <p> Показать телефон </p>
            <span>8 905 ХХХ ХХ ХХ</span>
          </Button>
        </About>
      </SellerInfo>

      <Heading>Товары продавца</Heading>
      <Adds count="4" />
    </>
  )
}

export default Seller
