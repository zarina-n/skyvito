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
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../features/api/apiSlice'
import { useParams } from 'react-router-dom'

const Seller = () => {
  const users = useSelector((state) => state.adds?.users)
  const allAdds = useSelector((state) => state.adds?.allAdds)

  const { id } = useParams()

  const sellerInfo = users.filter((user) => id === user.id)

  console.log(users.map((user) => console.log(user.id)))
  console.log(id)

  const sellerAdds = allAdds.filter((add) => add.user.id === sellerInfo.id)

  return (
    <>
      <Title>Профиль продавца</Title>
      <SellerInfo>
        <Image
          src={
            sellerInfo.avatar
              ? `${BASE_URL}${sellerInfo.avatar}`
              : '/img/no_picture.png'
          }
        />
        <About>
          <Name>{`${sellerInfo.name} ${sellerInfo.surname}`}</Name>
          <Details>{sellerInfo.city}</Details>
          <Details>{`Продает товары с ${sellerInfo.sells_from}`}</Details>

          <ShowNumberButton phoneNumber={sellerInfo.phone}></ShowNumberButton>
        </About>
      </SellerInfo>

      <Heading>Товары продавца</Heading>
      <Adds adds={sellerAdds} />
    </>
  )
}

export default Seller
