import { Title, Heading } from './Profile.styled'
import ProfileForm from './ProfileForm'
import Adds from '../../components/adds/Adds'
import { useGetCurrentUserQuery } from '../../features/users/usersApiSlice'
import { setCurrentUser } from '../../features/users/usersSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const userAdds = false

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users?.currentUser)

  const { data, isLoading, isSuccess, isError, error } =
    useGetCurrentUserQuery()

  useEffect(() => {
    if (isSuccess) {
      console.log(data)
      dispatch(setCurrentUser(data))
    }
  }, [isSuccess, dispatch, data])

  if (isError) {
    console.log(error)
  }

  return (
    <>
      <Title>Здравствуйте, {user?.name}!</Title>
      <Heading>Настройки профиля</Heading>
      {user && <ProfileForm person={user} />}
      <Heading>Мои товары</Heading>
      {userAdds ? (
        <Adds count="4" />
      ) : (
        <Heading>Пока ваших объявлений нет</Heading>
      )}
    </>
  )
}

export default Profile
