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
import createdOn from '../../components/adds/utils'

import { useTranslation } from 'react-i18next'

const AddAbout = () => {
  const { t } = useTranslation(['adPage'])

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

  const date = new Date(add?.user?.sells_from).getFullYear()

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
          {addImages?.length > 0 ? (
            addImages?.map((image, i) => {
              return (
                <img
                  src={image.url}
                  alt={image.title}
                  key={image.id}
                  onClick={() => displayImage(addImages, i)}
                />
              )
            })
          ) : (
            <img src="/img/no_picture.png" alt="" />
          )}
        </Images>
        <Details>
          <h1>{add?.title}</h1>
          <ItemInfo>
            <Text>
              {createdOn(add?.created_on, localStorage.getItem('i18nextLng'))}
            </Text>
            <Text>{add?.user.city}</Text>
            <span
              onClick={() => {
                dispatch(isModalOpen(true))
                dispatch(getModal('reviews'))
              }}
            >
              {getReviewsLength(
                currentReviews?.length,
                t('review'),
                t('reviews1'),
                t('reviews2')
              )}
            </span>
          </ItemInfo>

          <h3>{add?.price}</h3>

          {isCurrentUser ? (
            <>
              <Button
                margin={'0 10px 10px 0'}
                onClick={() => {
                  dispatch(getModal('edit-add'))
                  dispatch(isModalOpen(true))
                }}
              >
                {t('editButton')}
              </Button>
              <Button onClick={() => handleDeleteAdd()}>
                {t('deleteAdButton')}
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
              <Text>{`${t('sellsFrom')} ${date}`}</Text>
            </div>
          </Seller>
        </Details>
      </AddDetails>

      <AddDescription>
        <h2>{t('productDescription')}</h2>
        <p>{add?.description}</p>
      </AddDescription>
    </>
  )
}

export default AddAbout
