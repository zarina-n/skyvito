import {
  ReviewContainer,
  Image,
  Details,
  NameDate,
  ReviewContent,
} from './Reviews.styled'

const review = {
  name: 'Олег',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  date: '14 августа',
}

const Review = () => {
  return (
    <ReviewContainer>
      <div>
        <Image />
      </div>
      <Details>
        <NameDate>
          <p>{review.name}</p>
          <span>{review.date}</span>
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
