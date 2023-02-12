import { Add, Image, Name, Price, Details } from './Adds.styled'
import { BASE_URL } from '../../features/api/apiSlice'
import createdOn from './utils'

const SingleAdd = ({ id, name, price, city, time, images }) => {
  const imgUrl = `${BASE_URL}${images[0]?.url}`

  return (
    <Add to={`/add/${id}`}>
      <Image>
        <img
          src={imgUrl.slice(-3) === 'png' ? imgUrl : '/img/no_picture.png'}
          alt={name}
        />
      </Image>
      <Name title={name}>{name}</Name>
      <Price>{`${price} ₽`}</Price>
      <Details>{city}</Details>
      <Details>{createdOn(time)}</Details>
    </Add>
  )
}

export default SingleAdd
