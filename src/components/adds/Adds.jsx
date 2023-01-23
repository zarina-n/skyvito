import SingleAdd from './SingleAdd'
import { AddsContainer } from './Adds.styled'

const Adds = () => {
  const content = Array.from({ length: 8 }).map((item, i) => (
    <SingleAdd key={i} />
  ))
  return <AddsContainer>{content}</AddsContainer>
}

export default Adds
