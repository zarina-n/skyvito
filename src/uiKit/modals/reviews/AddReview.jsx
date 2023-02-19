import Button from '../../buttons/Button'
import TextArea from '../../inputs/TextArea'
import { AddReviewContainer } from './Reviews.styled'
import { useAddReviewMutation } from '../../../features/reviews/reviewApiSlice'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AddReview = () => {
  const { id } = useParams()
  const [review, setReview] = useState('')

  const handleChange = (event) => {
    setReview(event.target.value)
  }

  const [addReview, { isLoading, isSuccess, isError, error }] =
    useAddReviewMutation(Number(id))

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await addReview({ id: id, text: review })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      console.log('review submitted')
    }
  }, [isSuccess])

  return (
    <AddReviewContainer onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="review">Добавить отзыв</label>
      <TextArea
        placeholder={'Введите отзыв'}
        name="review"
        id="review"
        onChange={(event) => handleChange(event)}
      />

      <Button width="181px" type="submit">
        Опубликовать
      </Button>
    </AddReviewContainer>
  )
}

export default AddReview
