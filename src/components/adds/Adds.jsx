import SingleAdd from './SingleAdd'
import { AddsContainer } from './Adds.styled'

const Adds = ({ adds }) => {
  let content = adds?.map((add) => {
    return (
      <SingleAdd
        key={add.id}
        id={add.id}
        name={add.title}
        price={add.price}
        city={add.user.city}
        time={add?.created_on}
        images={add.images}
        user={add.user}
      />
    )
  })
  return <AddsContainer>{content}</AddsContainer>
}

export default Adds
