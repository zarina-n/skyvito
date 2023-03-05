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
import {
  useCreateAddMutation,
  useCreateAddWithNoImagesMutation,
} from '../../../features/adds/addsApiSlice'
import { useState, useEffect } from 'react'
import { isModalOpen } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { ThreeDots } from 'react-loading-icons'

const NewAdd = () => {
  const imgLimit = 5
  const dispatch = useDispatch()
  const [
    createAdd,
    { isSuccess: isCreateSuccess, isLoading: isCreateLoading },
  ] = useCreateAddMutation()
  const [
    createAddWithNoImages,
    {
      isSuccess: isCreateWithNoAddsSuccess,
      isLoading: isCreateWithNoAddsLoading,
    },
  ] = useCreateAddWithNoImagesMutation()

  const [isDisable, setIsDisable] = useState(true)
  const [imgQuality, setImgQuality] = useState(0)
  const [preview, setPreview] = useState([])
  const [values, setValues] = useState({
    title: '',
    description: '',
    files: [],
    price: 0,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (values.title !== '') {
      try {
        const formData = new FormData()

        const query = `?title=${values.title}&description=${
          values.description
        }&price=${Number(values.price)}`

        values.files?.forEach((picture) => formData.append('files', picture))

        const data = {
          query,
          formData,
        }

        if (values.files.length > 0) {
          const response = await createAdd(data)
          console.log(response)
        } else {
          const response = createAddWithNoImages(data)
          console.log(response)
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handlePictureChange = (event) => {
    const newFiles = Object.values(event.target.files)
      .map((file) => file)
      .slice(0, 5)

    if (newFiles) {
      const updatedList = [...values.files, ...newFiles]
      console.log(updatedList)
      setValues({
        ...values,
        files: updatedList,
      })
    }

    setIsDisable(false)
  }

  const handleDeletePreview = (id) => {
    const copy = [...values.files]
    copy.splice(id, 1)
    setValues({
      ...values,
      files: copy,
    })
    setPreview(preview.slice(id, 1))
  }

  useEffect(() => {
    if (values.files.length === 0) {
      setPreview([])
    } else if (values.files.length >= 5) {
      setImgQuality(4)
    }

    const objectUrl = []
    values.files.forEach((image) => objectUrl.push(URL.createObjectURL(image)))

    setPreview(objectUrl)
    setImgQuality(objectUrl.length)
  }, [values.files])

  useEffect(() => {
    if (isCreateSuccess || isCreateWithNoAddsSuccess) {
      dispatch(isModalOpen(false))
    }
  }, [isCreateSuccess, isCreateWithNoAddsSuccess, dispatch])

  return (
    <StyledNewAdd>
      <Title>Новое объявление</Title>
      <Heading>Название</Heading>
      <Input
        type="text"
        width={'100%'}
        placeholder="Введите название"
        name={'title'}
        onChange={(event) => {
          setValues({ ...values, title: event.target.value })
          setIsDisable(false)
        }}
        required
      />

      <Heading>Описание</Heading>
      <TextArea
        width={'100%'}
        height={'200px'}
        placeholder="Введите описание"
        name={'description'}
        onChange={(event) => {
          setValues({ ...values, description: event.target.value })
          setIsDisable(false)
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
            onChange={(event) => handlePictureChange(event)}
          />

          {preview.map((preview, i) => (
            <UploadedImage
              src={preview}
              onClick={() => handleDeletePreview(i)}
            />
          ))}

          {Array(imgLimit - imgQuality)
            .fill()
            .map((item, i) => {
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
          type="number"
          width={'200px'}
          name={'price'}
          onChange={(event) => {
            setValues({ ...values, price: Number(event.target.value) })
            setIsDisable(false)
          }}
        />
      </Price>

      <Button
        margin={'10px 0 0 0'}
        disabled={isDisable}
        onClick={(event) => handleSubmit(event)}
      >
        {isCreateLoading || isCreateWithNoAddsLoading ? (
          <ThreeDots />
        ) : (
          'Опубликовать'
        )}
      </Button>
    </StyledNewAdd>
  )
}

export default NewAdd
