import {
  AddDetails,
  AddDescription,
  Images,
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
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../features/api/apiSlice'
import { useGetReviewByIdQuery } from '../../features/reviews/reviewApiSlice'
import { getReviews } from '../../features/reviews/reviewSlice'
import { getReviewsLength } from './utils'
import { getModal, isModalOpen } from '../../features/modal/modalSlice'
import { setCurrentAddImages } from '../../features/adds/addsSlice'
import { useDeleteAddMutation } from '../../features/adds/addsApiSlice'

const AddAbout = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isCurrentUser, setIsCurrentUser] = useState(false)
  const [deleteAdd] = useDeleteAddMutation()

  const add = useSelector((state) => state.adds?.currentAdd)
  const addImages = useSelector((state) => state.adds?.currentAddImages)
  const currentUserId = useSelector((state) => state?.users?.currentUser?.id)
  const currentReviews = useSelector((state) => state.reviews?.reviews)
  const isLoginOpen = useSelector((state) => state.modal.isOpen)
  const modalName = useSelector((state) => state.modal.modal)

  const handleDeleteAdd = async () => {
    try {
      deleteAdd(id)
      navigate('/profile')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (currentUserId && currentUserId === add.user_id) {
      setIsCurrentUser(true)
    }
  }, [currentUserId, add])

  const { data: reviews, isSuccess, isError, error } = useGetReviewByIdQuery(id)

  useEffect(() => {
    if (isSuccess) {
      dispatch(getReviews(reviews))
    } else if (isError) {
      console.log(error)
    }
  }, [dispatch, isSuccess, reviews, isError, error])

  useEffect(() => {
    if (add) {
      const images = add.images.map((image) => {
        return {
          url: `${BASE_URL}${image.url}`,
          alt: add.title,
          id: image.id,
        }
      })
      dispatch(setCurrentAddImages(images))
    }
  }, [add, dispatch])

  const displayImage = (images, index) => {
    const arr = [...images]
    const clickedImage = arr.splice(index, 1)
    arr.unshift(clickedImage[0])

    dispatch(setCurrentAddImages(arr))
  }

  return (
    <>
      {isLoginOpen && <Modal modal={modalName} />}

      <AddDetails>
        <Images>
          {addImages?.map((image, i) => {
            return (
              <img
                src={image.url}
                alt={image.title}
                key={image.id}
                onClick={() => displayImage(addImages, i)}
              />
            )
          })}
        </Images>
        <Details>
          <h1>{add?.title}</h1>
          <ItemInfo>
            <Text>{add?.created_on}</Text>
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

          {isCurrentUser ? (
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
              <Button onClick={() => handleDeleteAdd()}>
                Снять с публикации
              </Button>
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
              <Text>{`Продает товары с ${add?.created_on}`}</Text>
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
