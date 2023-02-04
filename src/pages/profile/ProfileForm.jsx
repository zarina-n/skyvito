import { AccountForm, Image, Data, Label, Inputs } from './Profile.styled'
import Input from '../../uiKit/inputs/Input'
import Button from '../../uiKit/buttons/Button'

const ProfileForm = ({ person }) => {
  return (
    <AccountForm onSubmit={(event) => event.preventDefault()}>
      <Image>
        <div></div>
        <p>Заменить</p>
      </Image>
      <Data>
        <Inputs>
          <div>
            <Label htmlFor="name">Имя</Label>
            <Input
              placeholder={person.name}
              name="name"
              id="name"
              type="text"
              width="300px"
              placeholderColor="#000"
            />
          </div>

          <div>
            <Label htmlFor="surname">Фамилия</Label>
            <Input
              placeholder={person.surname}
              name="surname"
              type="text"
              id="surname"
              width="300px"
              placeholderColor="#000"
            />
          </div>

          <div>
            <Label htmlFor="city">Город</Label>
            <Input
              placeholder={person.city}
              name="city"
              type="text"
              id="city"
              width="300px"
              placeholderColor="#000"
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input
              placeholder={person.phone}
              name="phone"
              type="text"
              id="phone"
              width="614px"
              placeholderColor="#000"
            />
          </div>
        </Inputs>

        <Button margin="30px 0  0 0">Сохранить</Button>
      </Data>
    </AccountForm>
  )
}

export default ProfileForm
