import Adds from '../../components/adds/Adds'
import { Title } from './Home.styled'

const Home = () => {
  return (
    <div>
      <Title>Объявления</Title>
      <Adds count="8" />
    </div>
  )
}

export default Home
