import Button from '../../buttons/Button'
import TextArea from '../../inputs/TextArea'
import { AddReviewContainer } from './Reviews.styled'

const AddReview = () => {
  return (
    <AddReviewContainer>
      <label htmlFor="review">Добавить отзыв</label>
      <TextArea placeholder={'Введите отзыв'} name="review" id="review" />

      <Button width="181px">Опубликовать</Button>
    </AddReviewContainer>
  )
}

export default AddReview
