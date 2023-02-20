import Review from './Review'
import AddReview from './AddReview'
import { StyledReview, Title } from './Reviews.styled'
import { useSelector } from 'react-redux'

const Reviews = () => {
  const reviews = useSelector((state) => state.reviews?.reviews)

  const content = reviews?.map((review) => {
    return <Review key={review.id} id={review.id} review={review} />
  })

  const user = useSelector((state) => state.auth?.user)

  return (
    <StyledReview>
      <Title>Отзывы о товаре</Title>

      {user && <AddReview />}

      {content}
      {content.length === 0 && <p>Пока отзывов нет</p>}
    </StyledReview>
  )
}

export default Reviews
