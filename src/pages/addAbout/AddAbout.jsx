import {
  AddDetails,
  AddDescription,
  Images,
  MainImg,
  Details,
  Seller,
  SellerImg,
  ItemInfo,
  Text,
  SellerLink,
} from './AddAbout.styled'
import { useParams, Link } from 'react-router-dom'
import Button from '../../uiKit/buttons/Button'

const AddAbout = () => {
  const { id } = useParams()

  const item = {
    name: 'Ракетка для большого тенниса Triumph Pro STС Б/У',
    price: '2 200 ₽',
    city: 'Санкт Петербург',
    timeStamp: 'Сегодня в 10:45',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    phone: '12345789',
    sellerName: 'Кирилл',
    sellerOnSiteSince: 'Продает товары с августа 2021',
  }
  return (
    <>
      <AddDetails>
        <Images>
          <MainImg></MainImg>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Images>
        <Details>
          <h1>{item.name}</h1>
          <ItemInfo>
            <Text>Сегодня в 10:45</Text>
            <Text>Санкт-Петербург</Text>
            <span>23 отзыва</span>
          </ItemInfo>

          <h3>{item.price}</h3>

          <Button hoverColor="#0080C1" padding={'10px 37px'}>
            <p> Показать телефон </p>
            <span>8 905 ХХХ ХХ ХХ</span>
          </Button>

          <Seller>
            <SellerImg />
            <div>
              <SellerLink to={'/seller'}>{item.sellerName}</SellerLink>
              <Text>{item.sellerOnSiteSince}</Text>
            </div>
          </Seller>
        </Details>
      </AddDetails>

      <AddDescription>
        <h2>Описание товара</h2>
        <p>{item.description}</p>
      </AddDescription>
    </>
  )
}

export default AddAbout
