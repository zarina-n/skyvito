import { Add, Image, Name, Price, Details } from './Adds.styled'

const SingleAdd = () => {
  return (
    <Add to="/add:id">
      <Image></Image>
      <Name to="/add:id">Ракетка для большого тенниса Triumph Pro ST...</Name>
      <Price>2 200 ₽</Price>
      <Details>Санкт Петербург</Details>
      <Details>Сегодня в 10:45</Details>
    </Add>
  )
}

export default SingleAdd
