import SingleAdd from './SingleAdd'
import { AddsContainer } from './Adds.styled'

const Adds = ({ count }) => {
  const content = Array.from({ length: count }).map((item, i) => (
    <SingleAdd key={i} />
  ))
  return <AddsContainer>{content}</AddsContainer>
}

export default Adds
