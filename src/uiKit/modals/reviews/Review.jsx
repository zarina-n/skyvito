import {
  ReviewContainer,
  Image,
  Details,
  NameDate,
  ReviewContent,
} from './Reviews.styled'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../../features/api/apiSlice'

const Review = ({ review }) => {
  const users = useSelector((state) => state.adds?.users)
  const user = users.filter((user) => user.id === review.author_id)

  return (
    <ReviewContainer>
      <div>
        <Image src={`${BASE_URL}${user[0].avatar}`} />
      </div>
      <Details>
        <NameDate>
          <p>{user[0].name}</p>
          <span>{review.created_on}</span>
        </NameDate>

        <ReviewContent>
          <p>Комментарий</p>
          <span>{review.text}</span>
        </ReviewContent>
      </Details>
    </ReviewContainer>
  )
}

export default Review
