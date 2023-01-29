import { Title, Heading } from './Profile.styled'
import ProfileForm from './ProfileForm'
import Adds from '../../components/adds/Adds'

const person = {
  name: 'Антон',
  surname: 'Городецкий',
  city: 'Санкт-Петербург',
  phone: 89161234567,
}

const Profile = () => {
  return (
    <>
      <Title>Здравствуйте, {person.name}!</Title>
      <Heading>Настройки профиля</Heading>
      <ProfileForm person={person} />
      <Heading>Мои товары</Heading>
      <Adds count="4" />
    </>
  )
}

export default Profile
