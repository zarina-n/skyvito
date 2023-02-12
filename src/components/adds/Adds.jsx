import SingleAdd from './SingleAdd'
import { AddsContainer } from './Adds.styled'
import { useGetAllAddsQuery } from '../../features/adds/addsApiSlice'

const Adds = ({ count }) => {
  const {
    data: adds,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllAddsQuery()

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = adds.map((add) => {
      return (
        <SingleAdd
          key={add.id}
          id={add.id}
          name={add.title}
          price={add.price}
          city={add.user.city}
          time={add.created_on}
          images={add.images}
        />
      )
    })
  } else if (isError) {
    content = { error }
  }

  return <AddsContainer>{content}</AddsContainer>
}

export default Adds
