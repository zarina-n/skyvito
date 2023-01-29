import { Add, Image, Name, Price, Details } from './Adds.styled'

const SingleAdd = ({ id }) => {
  const item = {
    name: 'Ракетка для большого тенниса Triumph Pro STС Б/У',
    price: '2 200 ₽',
    city: 'Санкт Петербург',
    timeStamp: 'Сегодня в 10:45',
  }
  return (
    <Add to={`/add/${id}`}>
      <Image></Image>
      <Name title={item.name}>{item.name}</Name>
      <Price>{item.price}</Price>
      <Details>{item.city}</Details>
      <Details>{item.timeStamp}</Details>
    </Add>
  )
}

export default SingleAdd
