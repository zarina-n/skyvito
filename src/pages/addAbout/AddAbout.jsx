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
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../features/api/apiSlice'
import { useGetReviewByIdQuery } from '../../features/reviews/reviewApiSlice'
import { getReviews } from '../../features/reviews/reviewSlice'
import { getReviewsLength } from './utils'
import createdOn from '../../components/adds/utils'
import { getModal, isModalOpen } from '../../features/modal/modalSlice'

const AddAbout = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const add = useSelector((state) => state.adds?.currentAdd)
  const currentReviews = useSelector((state) => state.reviews?.reviews)
  const isLoginOpen = useSelector((state) => state.modal.isOpen)
  const modalName = useSelector((state) => state.modal.modal)

  const user = true

  const { data: reviews, isSuccess, isError, error } = useGetReviewByIdQuery(id)

  useEffect(() => {
    if (isSuccess) {
      dispatch(getReviews(reviews))
    } else if (isError) {
      console.log(error)
    }
  }, [dispatch, isSuccess, reviews, isError, error])

  return (
    <>
      {isLoginOpen && <Modal modal={modalName} />}

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
            <Text>{createdOn(add?.created_on)}</Text>
            <Text>{add?.user.city}</Text>
            <span
              onClick={() => {
                dispatch(isModalOpen(true))
                dispatch(getModal('reviews'))
              }}
            >
              {getReviewsLength(currentReviews?.length)}
            </span>
          </ItemInfo>

          <h3>{`${add?.price} ₽`}</h3>

          {user ? (
            <>
              <Button
                margin={'0 10px 10px 0'}
                onClick={() => {
                  dispatch(isModalOpen(true))
                  dispatch(getModal('edit-add'))
                }}
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
              <Text>{`Продает товары с ${createdOn(add?.created_on)}`}</Text>
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
