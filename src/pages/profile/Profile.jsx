import { Title, Heading } from './Profile.styled'
import ProfileForm from './ProfileForm'
import Adds from '../../components/adds/Adds'
import { useGetCurrentUserQuery } from '../../features/users/usersApiSlice'
import { setCurrentUser } from '../../features/users/usersSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useGetCurrentUserAddsQuery } from '../../features/adds/addsApiSlice'
import { setUserAdds } from '../../features/adds/addsSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.users?.currentUser)
  const userAddsFromState = useSelector((state) => state.adds?.userAdds)

  const { data, isSuccess, isError, error } = useGetCurrentUserQuery()

  const {
    data: userAdds,
    isSuccess: isUserAddsSuccess,
    isError: isUserAddsError,
    error: userAddsError,
  } = useGetCurrentUserAddsQuery()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCurrentUser(data))
    }
  }, [isSuccess, dispatch, data])

  useEffect(() => {
    if (isUserAddsSuccess) {
      dispatch(setUserAdds(userAdds))
    } else if (isUserAddsError) {
      console.log(userAddsError)
    }
  }, [isUserAddsSuccess, dispatch, userAdds, isUserAddsError, userAddsError])

  if (isError) {
    console.log(error)
  }

  return (
    <>
      <Title>Здравствуйте, {data?.name}!</Title>
      <Heading>Настройки профиля</Heading>
      {user && <ProfileForm isSuccess={isSuccess} avatarImg={user?.avatar} />}
      <Heading>Мои товары</Heading>
      {userAddsFromState ? (
        <Adds adds={userAddsFromState} />
      ) : (
        <Heading>Пока ваших объявлений нет</Heading>
      )}
    </>
  )
}

export default Profile
