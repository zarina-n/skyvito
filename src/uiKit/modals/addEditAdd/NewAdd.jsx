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

const NewAdd = () => {
  const dispatch = useDispatch()
  const [createAdd] = useCreateAddMutation()
  const [createAddWithNoImages] = useCreateAddWithNoImagesMutation()

  const [isDisable, setIsDisable] = useState(false)
  const [preview, setPreview] = useState([])
  const [values, setValues] = useState({
    title: '',
    description: '',
    files: [],
    price: 0,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

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

      dispatch(isModalOpen(false))
    } catch (err) {
      console.log(err)
    }
  }

  const handlePictureChange = (event) => {
    const newFiles = Object.values(event.target.files).map((file) => file)

    if (newFiles) {
      const updatedList = [...values.files, ...newFiles]
      setValues({
        ...values,
        files: updatedList,
      })
    }

    setIsDisable(false)

    console.log(event.target.files)
    console.log(values.files)
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
    }
    const objectUrl = []
    values.files.forEach((image) => objectUrl.push(URL.createObjectURL(image)))
    setPreview(objectUrl)
  }, [values.files])

  useEffect(() => {
    if (
      values.title === '' &&
      values.description === '' &&
      values.price === ''
    ) {
      setIsDisable(true)
    }
  }, [values])

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

          {preview && preview[0] ? (
            <UploadedImage
              src={preview[0]}
              onClick={() => handleDeletePreview(0)}
            />
          ) : (
            <label htmlFor="images">
              <UploadImageDiv />
            </label>
          )}

          {preview && preview[1] ? (
            <UploadedImage
              src={preview[1]}
              onClick={() => handleDeletePreview(1)}
            />
          ) : (
            <label htmlFor="images">
              <UploadImageDiv />
            </label>
          )}

          {preview && preview[2] ? (
            <UploadedImage
              src={preview[2]}
              onClick={() => handleDeletePreview(2)}
            />
          ) : (
            <label htmlFor="images">
              <UploadImageDiv />
            </label>
          )}

          {preview && preview[3] ? (
            <UploadedImage
              src={preview[3]}
              onClick={() => handleDeletePreview(3)}
            />
          ) : (
            <label htmlFor="images">
              <UploadImageDiv />
            </label>
          )}

          {preview && preview[4] ? (
            <UploadedImage
              src={preview[4]}
              onClick={() => handleDeletePreview(4)}
            />
          ) : (
            <label htmlFor="images">
              <UploadImageDiv />
            </label>
          )}
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
          required={true}
        />
      </Price>

      <Button
        margin={'10px 0 0 0'}
        disabled={isDisable}
        onClick={(event) => handleSubmit(event)}
      >
        Опубликовать
      </Button>
    </StyledNewAdd>
  )
}

export default NewAdd
