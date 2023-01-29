import SingleAdd from './SingleAdd'
import { AddsContainer } from './Adds.styled'

const Adds = ({ count }) => {
  const content = Array.from({ length: count }).map((item, i) => (
    <SingleAdd key={i} id={i + 1} />
  ))
  return <AddsContainer>{content}</AddsContainer>
}

export default Adds
