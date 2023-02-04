import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import TextArea from '../../inputs/TextArea'
import {
  StyledNewAdd,
  Title,
  Heading,
  Images,
  Image,
  Price,
} from './AddEdit.styled'

const EditAdd = () => {
  const item = {
    name: 'Ракетка для большого тенниса Triumph Pro STС Б/У',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '2 200',
  }
  return (
    <StyledNewAdd>
      <Title>Редактировать объявление</Title>
      <Heading>Название</Heading>
      <Input
        type="text"
        width={'100%'}
        placeholder="Введите название"
        value={item.name}
      />

      <Heading>Описание</Heading>
      <TextArea
        width={'100%'}
        height={'200px'}
        placeholder="Введите описание"
        value={item.description}
      />

      <Images>
        <div>
          <Heading>Фотографии товара</Heading>
          <span>не более 5 фотографий</span>
        </div>
        <div>
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>
      </Images>

      <Heading>Цена</Heading>
      <Price>
        <Input type="text" width={'200px'} value={item.price} />
      </Price>

      <Button margin={'10px 0 0 0'}>Опубликовать</Button>
    </StyledNewAdd>
  )
}

export default EditAdd
