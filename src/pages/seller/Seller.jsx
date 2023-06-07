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
import { useTranslation } from 'react-i18next'

const Seller = () => {
  const { t } = useTranslation(['profile'])

  const users = useSelector((state) => state.adds?.users)
  const allAdds = useSelector((state) => state.adds?.allAdds)

  const { id } = useParams()

  const seller = users?.filter((user) => Number(user.id) === Number(id))
  const sellerAdds = allAdds?.filter(
    (add) => Number(add.user_id) === Number(id)
  )

  const date = new Date(seller[0]?.sells_from).getFullYear()

  return (
    <>
      <Title>{t('sellerProfile')}</Title>
      <SellerInfo>
        <Image
          src={
            seller[0]?.avatar
              ? `${BASE_URL}${seller[0].avatar}`
              : '/img/no_picture.png'
          }
        />
        <About>
          <Name>{`${seller[0]?.name} ${seller[0]?.surname}`}</Name>
          <Details>{seller[0]?.city}</Details>
          <Details>{`${t('sellsFrom')} ${date}`}</Details>

          <ShowNumberButton phoneNumber={seller[0]?.phone}></ShowNumberButton>
        </About>
      </SellerInfo>
      <Heading>{t('sellersAds')}</Heading>
      <Adds adds={sellerAdds} />
    </>
  )
}

export default Seller
