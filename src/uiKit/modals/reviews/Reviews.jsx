import Review from './Review'
import AddReview from './AddReview'
import { StyledReview, Title } from './Reviews.styled'

const Reviews = () => {
  const content = Array.from({ length: 5 }).map((item, i) => (
    <Review key={i} id={i + 1} />
  ))
  return (
    <StyledReview>
      <Title>Отзывы о товаре</Title>

      <AddReview />

      {content}
    </StyledReview>
  )
}

export default Reviews
