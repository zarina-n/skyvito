import Adds from '../../components/adds/Adds'
import ShowNumberButton from '../../uiKit/buttons/ShowNumberButton'
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
    phone: '89051234567',
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

          <ShowNumberButton phoneNumber={seller.phone}></ShowNumberButton>
        </About>
      </SellerInfo>

      <Heading>Товары продавца</Heading>
      <Adds count="4" />
    </>
  )
}

export default Seller
