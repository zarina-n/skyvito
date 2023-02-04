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
import ShowNumberButton from '../../uiKit/buttons/ShowNumberButton'
import Button from '../../uiKit/buttons/Button'
import Modal from '../../uiKit/modals/modal/Modal'
import { useState } from 'react'
import Reviews from '../../uiKit/modals/reviews/Reviews'
import EditAdd from '../../uiKit/modals/addEditAdd/EditAdd'

const AddAbout = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [isEditAddOpen, setIsEditAddOpen] = useState(false)

  const user = true

  const item = {
    name: 'Ракетка для большого тенниса Triumph Pro STС Б/У',
    price: '2 200 ₽',
    city: 'Санкт Петербург',
    timeStamp: 'Сегодня в 10:45',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    phone: '89051234567',
    sellerName: 'Кирилл',
    sellerOnSiteSince: 'Продает товары с августа 2021',
  }

  return (
    <>
      <Modal open={isReviewOpen} onClose={() => setIsReviewOpen(false)}>
        <Reviews />
      </Modal>

      <Modal open={isEditAddOpen} onClose={() => setIsEditAddOpen(false)}>
        <EditAdd />
      </Modal>
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
            <span onClick={() => setIsReviewOpen(true)}>23 отзыва</span>
          </ItemInfo>

          <h3>{item.price}</h3>

          {user ? (
            <>
              <Button
                margin={'0 10px 10px 0'}
                onClick={() => setIsEditAddOpen(true)}
              >
                Редактировать
              </Button>
              <Button>Снять с публикации</Button>
            </>
          ) : (
            <ShowNumberButton phoneNumber={item.phone}></ShowNumberButton>
          )}

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
