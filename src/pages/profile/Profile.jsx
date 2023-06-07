import { Title, Heading } from './Profile.styled'
import ProfileForm from './ProfileForm'
import Adds from '../../components/adds/Adds'
import { useGetCurrentUserQuery } from '../../features/users/usersApiSlice'
import { setCurrentUser } from '../../features/users/usersSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetCurrentUserAddsQuery } from '../../features/adds/addsApiSlice'
import { setUserAdds } from '../../features/adds/addsSlice'
import { useTranslation } from 'react-i18next'

const Profile = () => {
  const { t } = useTranslation(['profile'])
  const dispatch = useDispatch()
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
      <Title>{`${t('hello')} ${data?.name}!`}</Title>
      <Heading>{t('profileSettings')}</Heading>
      {user && <ProfileForm isSuccess={isSuccess} avatarImg={user?.avatar} />}
      <Heading>{t('myAds')}</Heading>
      {userAddsFromState ? (
        <Adds adds={userAddsFromState} />
      ) : (
        <Heading>{t('noProducts')}</Heading>
      )}
    </>
  )
}

export default Profile
