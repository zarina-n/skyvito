import Adds from '../../components/adds/Adds'
import { Title } from './Home.styled'
import { useGetAllAddsQuery } from '../../features/adds/addsApiSlice'
import { useGetUsersQuery } from '../../features/users/usersApiSlice'
import { getAllAdds, getUsers } from '../../features/adds/addsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { ThreeDots } from 'react-loading-icons'

const Home = () => {
  const dispatch = useDispatch()
  const allAdds = useSelector((state) => state.adds?.allAdds)
  const searchValue = useSelector((state) => state.adds?.search)

  const {
    data: adds,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllAddsQuery()

  const { data: users } = useGetUsersQuery()

  useEffect(() => {
    dispatch(getUsers(users))
  }, [users, dispatch])

  useEffect(() => {
    if (isSuccess) {
      dispatch(getAllAdds(adds))
    }
  }, [dispatch, isSuccess, adds])

  let content

  if (isLoading) {
    content = <ThreeDots />
  } else if (isSuccess) {
    content = (
      <Adds
        adds={allAdds?.filter((add) =>
          searchValue.toLowerCase() === ''
            ? add
            : add.title.toLowerCase().includes(searchValue)
        )}
      />
    )
  } else if (isError) {
    content = <p>Произошла ошибка</p>
  }

  return (
    <div>
      <Title>Объявления</Title>
      {content}
    </div>
  )
}

export default Home
