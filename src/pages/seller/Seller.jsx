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

  const seller = users.filter((user) => Number(user.id) === Number(id))
  const sellerAdds = allAdds.filter((add) => Number(add.user_id) === Number(id))

  return (
    <>
      <Title>Профиль продавца</Title>
      <SellerInfo>
        <Image
          src={
            seller[0].avatar
              ? `${BASE_URL}${seller[0].avatar}`
              : '/img/no_picture.png'
          }
        />
        <About>
          <Name>{`${seller[0].name} ${seller[0].surname}`}</Name>
          <Details>{seller[0].city}</Details>
          <Details>{`Продает товары с ${seller[0].sells_from}`}</Details>

          <ShowNumberButton phoneNumber={seller[0].phone}></ShowNumberButton>
        </About>
      </SellerInfo>

      <Heading>Товары продавца</Heading>
      <Adds adds={sellerAdds} />
    </>
  )
}

export default Seller
