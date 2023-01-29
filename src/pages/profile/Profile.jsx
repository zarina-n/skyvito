import { Title, Heading } from './Profile.styled'
import ProfileForm from './ProfileForm'
import Adds from '../../components/adds/Adds'

const person = {
  name: 'Антон',
  surname: 'Городецкий',
  city: 'Санкт-Петербург',
  phone: 89161234567,
}

const userAdds = true

const Profile = () => {
  return (
    <>
      <Title>Здравствуйте, {person.name}!</Title>
      <Heading>Настройки профиля</Heading>
      <ProfileForm person={person} />
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
