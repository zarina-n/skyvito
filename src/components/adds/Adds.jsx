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

  // const content = Array.from({ length: count }).map((item, i) => (
  //   <SingleAdd key={i} id={i + 1} />
  // ))

  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
    content = adds.map((add) => {
      console.log(add.images[0])
      return (
        <SingleAdd
          key={add.id}
          id={add.id}
          name={add.title}
          price={add.price}
          city={add.user.city}
          time={add.created_on}
          // imgUrl={add.images[0].url}
        />
      )
    })
  } else if (isError) {
    content = { error }
  }

  return <AddsContainer>{content}</AddsContainer>
}

export default Adds
