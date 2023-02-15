import SingleAdd from './SingleAdd'
import { AddsContainer } from './Adds.styled'

const Adds = ({ adds }) => {
  let content = adds?.map((add) => {
    return <SingleAdd key={add.id} add={add} />
  })
  return <AddsContainer>{content}</AddsContainer>
}

export default Adds
