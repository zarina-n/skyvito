import {
  ReviewContainer,
  Image,
  Details,
  NameDate,
  ReviewContent,
} from './Reviews.styled'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../../features/api/apiSlice'
import { useTranslation } from 'react-i18next'

const Review = ({ review }) => {
  const { t } = useTranslation(['adPage'])

  const users = useSelector((state) => state.adds?.users)
  const user = users.filter((user) => user.id === review.author_id)
  const userAvatar = user[0]?.avatar
    ? `${BASE_URL}${user[0]?.avatar}`
    : '/img/no_picture.png'

  return (
    <ReviewContainer>
      <div>
        <Image src={userAvatar} />
      </div>
      <Details>
        <NameDate>
          <p>{user[0]?.name}</p>
          <span>{review?.created_on}</span>
        </NameDate>

        <ReviewContent>
          <p>{t('reviewText')}</p>
          <span>{review?.text}</span>
        </ReviewContent>
      </Details>
    </ReviewContainer>
  )
}

export default Review
