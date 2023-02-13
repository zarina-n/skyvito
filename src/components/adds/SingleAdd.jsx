import { Add, Image, Name, Price, Details } from './Adds.styled'
import { BASE_URL } from '../../features/api/apiSlice'
import createdOn from './utils'
import { useDispatch } from 'react-redux'
import { getCurrentAdd } from '../../features/adds/addsSlice'

const SingleAdd = ({ add }) => {
  const dispatch = useDispatch()

  const imgUrl = `${BASE_URL}${add.images[0]?.url}`

  return (
    <Add to={`/add/${add.id}`} onClick={() => dispatch(getCurrentAdd(add))}>
      <Image>
        <img
          src={add.images?.length !== 0 ? imgUrl : '/img/no_picture.png'}
          alt={add.name}
        />
      </Image>
      <Name>{add.name}</Name>
      <Price>{`${add.price} ₽`}</Price>
      <Details>{add.user.city}</Details>
      <Details>{createdOn(add.created_on)}</Details>
    </Add>
  )
}

export default SingleAdd
