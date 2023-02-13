import {
  AddDetails,
  AddDescription,
  Images,
  MainImg,
  Details,
  Seller,
  SellerImg,
  ItemInfo,
  Text,
  SellerLink,
} from './AddAbout.styled'
import ShowNumberButton from '../../uiKit/buttons/ShowNumberButton'
import Button from '../../uiKit/buttons/Button'
import Modal from '../../uiKit/modals/modal/Modal'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Reviews from '../../uiKit/modals/reviews/Reviews'
import EditAdd from '../../uiKit/modals/addEditAdd/EditAdd'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../features/api/apiSlice'
import { useGetReviewByIdQuery } from '../../features/reviews/reviewApiSlice'
import { getCurrentReview } from '../../features/reviews/reviewSlice'
import { getReviewsLength } from './utils'

const AddAbout = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const add = useSelector((state) => state.adds?.currentAdd)
  const currentReviews = useSelector((state) => state.reviews?.currentReview)

  // console.log(add)

  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [isEditAddOpen, setIsEditAddOpen] = useState(false)

  const user = false

  const {
    data: reviews,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetReviewByIdQuery(id)

  useEffect(() => {
    if (isSuccess) {
      dispatch(getCurrentReview(reviews))
    }
  }, [dispatch, isSuccess, reviews])

  let reviewsContent

  if (isLoading) {
    reviewsContent = <p>Loading</p>
  } else if (isSuccess) {
    reviewsContent = reviews
  } else if (isError) {
    reviewsContent = <p>{error}</p>
  }

  return (
    <>
      <Modal open={isReviewOpen} onClose={() => setIsReviewOpen(false)}>
        <Reviews reviews={reviewsContent} />
      </Modal>

      <Modal open={isEditAddOpen} onClose={() => setIsEditAddOpen(false)}>
        <EditAdd />
      </Modal>
      <AddDetails>
        <Images>
          <MainImg></MainImg>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Images>
        <Details>
          <h1>{add?.title}</h1>
          <ItemInfo>
            <Text>Сегодня в 10:45</Text>
            <Text>Санкт-Петербург</Text>
            <span onClick={() => setIsReviewOpen(true)}>
              {getReviewsLength(currentReviews?.length)}
            </span>
          </ItemInfo>

          <h3>{`${add?.price} ₽`}</h3>

          {user ? (
            <>
              <Button
                margin={'0 10px 10px 0'}
                onClick={() => setIsEditAddOpen(true)}
              >
                Редактировать
              </Button>
              <Button>Снять с публикации</Button>
            </>
          ) : (
            <ShowNumberButton phoneNumber={add?.user.phone}></ShowNumberButton>
          )}

          <Seller>
            <SellerImg
              src={`${BASE_URL}${add?.user.avatar}`}
              alt="seller avatar"
            />
            <div>
              <SellerLink to={`/seller/${add?.user.id}`}>
                {add?.user.name}
              </SellerLink>
              <Text>{add?.created_on}</Text>
            </div>
          </Seller>
        </Details>
      </AddDetails>

      <AddDescription>
        <h2>Описание товара</h2>
        <p>{add?.description}</p>
      </AddDescription>
    </>
  )
}

export default AddAbout
