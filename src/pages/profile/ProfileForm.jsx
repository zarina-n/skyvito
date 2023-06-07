import { AccountForm, Image, Data, Label, Inputs } from './Profile.styled'
import Input from '../../uiKit/inputs/Input'
import Button from '../../uiKit/buttons/Button'
import React, { useState, useEffect } from 'react'
import { changeUserInfo } from '../../features/users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import {
  useChangeUserMutation,
  useUploadAvatarMutation,
} from '../../features/users/usersApiSlice'
import { BASE_URL } from '../../features/api/apiSlice'
import { ThreeDots } from 'react-loading-icons'
import { useTranslation } from 'react-i18next'

const ProfileForm = ({ isSuccess, avatarImg }) => {
  const { t } = useTranslation(['profile'])

  const dispatch = useDispatch()
  const inputRef = React.createRef()

  const avatarImgSrc =
    avatarImg !== null ? `${BASE_URL}${avatarImg}` : '/img/no_picture.png'

  const user = useSelector((state) => state.users?.currentUser)

  const [values, setValues] = useState({
    name: user?.name,
    surname: user?.surname,
    city: user?.city,
    phone: user?.phone,
  })

  const [isActive, setIsActive] = useState(true)
  const [avatar, setAvatar] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)

  const [
    changeUser,
    {
      isLoading: isUserChangeLoading,
      isError: isUserChangeError,
      error: userChangeError,
    },
  ] = useChangeUserMutation()

  const [changeAvatar] = useUploadAvatarMutation()

  const handleAvatar = (event) => {
    setAvatar(event.target.files[0])
    setAvatarPreview(event.target.files[0])

    setIsActive(false)
  }

  const handleName = (event) => {
    setValues({ ...values, name: event.target.value })
    dispatch(changeUserInfo(values.name))
    setIsActive(false)
  }

  const handleSurname = (event) => {
    setValues({ ...values, surname: event.target.value })
    dispatch(changeUserInfo(values.surname))
    setIsActive(false)
  }

  const handleCity = (event) => {
    setValues({ ...values, city: event.target.value })
    dispatch(changeUserInfo(values.city))
    setIsActive(false)
  }

  const handlePhone = (event) => {
    setValues({ ...values, phone: event.target.value })
    dispatch(changeUserInfo(values.phone))
    setIsActive(false)
  }

  const handleSubmit = async (async) => {
    try {
      await changeUser(values).unwrap()
      setIsActive(true)

      if (avatar) {
        const formData = new FormData()
        formData.append('file', avatar)
        changeAvatar(formData)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (isUserChangeError) {
      console.log(userChangeError)
    }
  }, [isUserChangeError, userChangeError])

  useEffect(() => {
    if (isSuccess) {
      setAvatarPreview(null)
    }
  }, [isSuccess])

  return (
    <AccountForm onSubmit={(event) => event.preventDefault()}>
      <Image>
        <img
          src={
            avatarPreview ? URL.createObjectURL(avatarPreview) : avatarImgSrc
          }
          alt="avatar"
        />
        <input
          type="file"
          id="avatar"
          onChange={(event) => handleAvatar(event)}
        />
        <label htmlFor="avatar">{t('photoChange')}</label>
      </Image>
      <Data>
        <Inputs>
          <div>
            <Label htmlFor="name">{t('name')}</Label>
            <Input
              placeholder={user?.name}
              name="name"
              id="name"
              type="text"
              width="300px"
              placeholderColor="#000"
              onChange={(event) => handleName(event)}
              ref={inputRef}
            />
          </div>

          <div>
            <Label htmlFor="surname">{t('surname')}</Label>
            <Input
              placeholder={user?.surname}
              name="surname"
              type="text"
              id="surname"
              width="300px"
              placeholderColor="#000"
              onChange={(event) => handleSurname(event)}
              ref={inputRef}
            />
          </div>

          <div>
            <Label htmlFor="city">{t('location')}</Label>
            <Input
              placeholder={user?.city}
              name="city"
              type="text"
              id="city"
              width="300px"
              placeholderColor="#000"
              onChange={(event) => handleCity(event)}
              ref={inputRef}
            />
          </div>

          <div>
            <Label htmlFor="phone">{t('phone')}</Label>
            <Input
              placeholder={user?.phone}
              name="phone"
              type="tel"
              id="phone"
              width="614px"
              placeholderColor="#000"
              onChange={(event) => handlePhone(event)}
              ref={inputRef}
            />
          </div>
        </Inputs>

        <Button
          disabled={isActive}
          onClick={() => handleSubmit()}
          margin="30px 0  0 0"
        >
          {isUserChangeLoading ? <ThreeDots /> : t('saveButton')}
        </Button>
      </Data>
    </AccountForm>
  )
}

export default ProfileForm
