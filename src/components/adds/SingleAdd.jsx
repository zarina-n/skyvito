import { Add, Image, AddLink, Price, Details } from './Adds.styled'

const SingleAdd = () => {
  return (
    <Add>
      <Image></Image>
      <AddLink to="/add">
        Ракетка для большого тенниса Triumph Pro ST...
      </AddLink>
      <Price>2 200 ₽</Price>
      <Details>Санкт Петербург</Details>
      <Details>Сегодня в 10:45</Details>
    </Add>
  )
}

export default SingleAdd
