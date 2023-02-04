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

const NewAdd = () => {
  return (
    <StyledNewAdd>
      <Title>Новое объявление</Title>
      <Heading>Название</Heading>
      <Input type="text" width={'100%'} placeholder="Введите название" />

      <Heading>Описание</Heading>
      <TextArea
        width={'100%'}
        height={'200px'}
        placeholder="Введите описание"
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
        <Input type="text" width={'200px'} />
      </Price>

      <Button margin={'10px 0 0 0'}>Опубликовать</Button>
    </StyledNewAdd>
  )
}

export default NewAdd
