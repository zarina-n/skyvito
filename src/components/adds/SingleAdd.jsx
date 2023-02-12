import { Add, Image, Name, Price, Details } from './Adds.styled'

const SingleAdd = ({ id, name, price, city, time, imgUrl }) => {
  return (
    <Add to={`/add/${id}`}>
      <Image src={imgUrl} alt={name}></Image>
      <Name title={name}>{name}</Name>
      <Price>{price}</Price>
      <Details>{city}</Details>
      <Details>{time}</Details>
    </Add>
  )
}

export default SingleAdd
