import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import TextArea from '../../inputs/TextArea'
import {
  StyledNewAdd,
  Title,
  Heading,
  Images,
  UploadImageDiv,
  UploadedImage,
  Price,
} from './AddEdit.styled'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../../../features/api/apiSlice'
import { useState, useEffect } from 'react'
import {
  useChangeAddMutation,
  useDeleteAddImageMutation,
  useUploadImageToAddMutation,
} from '../../../features/adds/addsApiSlice'
import { getCurrentAdd } from '../../../features/adds/addsSlice'
import { useParams } from 'react-router-dom'
import { isModalOpen } from '../../../features/modal/modalSlice'

const EditAdd = () => {
  const { id } = useParams()
  const add = useSelector((state) => state.adds?.currentAdd)
  const dispatch = useDispatch()
  const imgLimit = 5
  const imgQuality = add.images.length

  const [isDisable, setIsDisable] = useState(false)
  // const [imgQuality, setImgQuality] = useState(add.images.length)
  // const [preview, setPreview] = useState([])
  const [values, setValues] = useState({
    title: add.title,
    description: add.description,
    files: [],
    price: add.price,
  })

  const [changeAdd] = useChangeAddMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await changeAdd({ id: id, body: values })

      console.log(response)
      dispatch(getCurrentAdd(response.data))
      dispatch(isModalOpen(false))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledNewAdd>
      <Title>Редактировать объявление</Title>
      <Heading>Название</Heading>
      <Input
        type="text"
        width={'100%'}
        placeholder={add.title}
        onChange={(event) => {
          setValues({ ...values, title: event.target.value })
        }}
      />

      <Heading>Описание</Heading>
      <TextArea
        width={'100%'}
        height={'200px'}
        placeholder={add.description}
        onChange={(event) => {
          setValues({ ...values, description: event.target.value })
        }}
      />

      <Images>
        <div>
          <Heading>Фотографии товара</Heading>
          <span>не более 5 фотографий</span>
        </div>
        <div>
          <input
            type="file"
            multiple
            id="images"
            // onClick={(event) => handlePictureChange(event)}
          />

          {add?.images.map((img) => (
            <UploadedImage
              src={`${BASE_URL}${img.url}`}
              alt={add.title}
              key={img.id}
            />
          ))}

          {Array(imgLimit - imgQuality)
            .fill()
            .map((i) => {
              return (
                <label htmlFor="images" key={i}>
                  <UploadImageDiv />
                </label>
              )
            })}
        </div>
      </Images>

      <Heading>Цена</Heading>
      <Price>
        <Input
          type="text"
          width={'200px'}
          placeholder={add.price}
          onChange={(event) => {
            setValues({ ...values, price: event.target.value })
          }}
        />
      </Price>

      <Button
        margin={'10px 0 0 0'}
        disabled={isDisable}
        type="submit"
        onClick={(event) => handleSubmit(event)}
      >
        Сохранить
      </Button>
    </StyledNewAdd>
  )
}

export default EditAdd
