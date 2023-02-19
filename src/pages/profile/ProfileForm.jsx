import { AccountForm, Image, Data, Label, Inputs } from './Profile.styled'
import Input from '../../uiKit/inputs/Input'
import Button from '../../uiKit/buttons/Button'
import { useState, useEffect } from 'react'
import { changeUserInfo } from '../../features/users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useChangeUserMutation } from '../../features/users/usersApiSlice'

const ProfileForm = ({ person }) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [values, setValues] = useState({})

  const { name, surname, city, phone } = values

  const [changeUser, { isLoading, isSucces, isError, error }] =
    useChangeUserMutation()

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
    dispatch(changeUserInfo(values))
  }

  const handleSubmit = async (async) => {
    try {
      const response = await changeUser(values).unwrap()

      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (isError) {
      console.log(error)
    }
  }, [isError, error])

  return (
    <AccountForm onSubmit={(event) => event.preventDefault()}>
      <Image>
        <img
          src={person.avatar !== null ? person.avatar : '/img/no_picture.png'}
          alt="avatar"
        />
        <p>Заменить</p>
      </Image>
      <Data>
        <Inputs>
          <div>
            <Label htmlFor="name">Имя</Label>
            <Input
              placeholder={person?.name}
              name="name"
              id="name"
              type="text"
              width="300px"
              placeholderColor="#000"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div>
            <Label htmlFor="surname">Фамилия</Label>
            <Input
              placeholder={person?.surname}
              name="surname"
              type="text"
              id="surname"
              width="300px"
              placeholderColor="#000"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div>
            <Label htmlFor="city">Город</Label>
            <Input
              placeholder={person?.city}
              name="city"
              type="text"
              id="city"
              width="300px"
              placeholderColor="#000"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input
              placeholder={person?.phone}
              name="phone"
              type="text"
              id="phone"
              width="614px"
              placeholderColor="#000"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </Inputs>

        {edit ? (
          <Button margin="30px 0  0 0">Сохранить</Button>
        ) : (
          <Button onClick={() => handleSubmit()} margin="30px 0  0 0">
            Сохранить
          </Button>
        )}
      </Data>
    </AccountForm>
  )
}

export default ProfileForm
