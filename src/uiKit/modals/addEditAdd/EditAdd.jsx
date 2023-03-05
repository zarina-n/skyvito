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
import { ThreeDots } from 'react-loading-icons'

const EditAdd = () => {
  const { id } = useParams()
  const add = useSelector((state) => state.adds?.currentAdd)
  const dispatch = useDispatch()
  const imgLimit = 5

  const [isDisable, setIsDisable] = useState(false)
  const [preview, setPreview] = useState([])
  const [files, setFiles] = useState([])
  const [limit, setLimit] = useState(imgLimit)
  const [values, setValues] = useState({
    title: add.title,
    description: add.description,
    files: [],
    price: add.price,
  })

  const [
    changeAdd,
    { isSuccess: isChangeAddSuccess, isLoading: isChangeAddLoading },
  ] = useChangeAddMutation()
  const [deleteImage] = useDeleteAddImageMutation()
  const [uploadImage] = useUploadImageToAddMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await changeAdd({ id: id, body: values })

      // console.log(response)
      dispatch(getCurrentAdd(response.data))
    } catch (err) {
      console.log(err)
    }
  }

  const handlePictureChange = (event) => {
    const newFiles = Object.values(event.target.files)
      .map((file) => file)
      .slice(0, 5)

    // console.log(newFiles)

    const objectUrl = []
    newFiles.forEach((image) => objectUrl.push(URL.createObjectURL(image)))

    setPreview([...preview, ...objectUrl])
  }

  const handleDeleteImage = async (url) => {
    try {
      const query = `?file_url=${url}`
      const response = await deleteImage({ id, query })
      dispatch(getCurrentAdd(response.data))

      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (isChangeAddSuccess) {
      dispatch(isModalOpen(false))
      setFiles([])
    }
  }, [isChangeAddSuccess, dispatch])

  useEffect(() => {
    setLimit(imgLimit - add.images.length - files.length)
  }, [add.images.length, files.length])

  useEffect(() => {
    console.log(preview)
    console.log(limit)
  }, [preview, limit])

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
            onClick={(event) => handlePictureChange(event)}
          />

          {add?.images.map((img) => (
            <UploadedImage
              src={`${BASE_URL}${img.url}`}
              alt={add.title}
              key={img.id}
              onClick={() => handleDeleteImage(img.url)}
            />
          ))}

          {preview &&
            preview.map((preview, i) => (
              <UploadedImage
                src={preview}
                alt={add.title}
                key={i}
                // onClick={() => handleDeletePreview(i)}
              />
            ))}

          {Array(limit)
            .fill()
            .map((i) => {
              return (
                <label key={i} htmlFor="images">
                  <UploadImageDiv key={i} />
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
        {isChangeAddLoading ? <ThreeDots /> : 'Сохранить'}
      </Button>
    </StyledNewAdd>
  )
}

export default EditAdd
