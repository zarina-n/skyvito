import { StyledShowNumberButton } from './Button.styled'
import { useState } from 'react'
import { maskNumber, convertPhoneNum } from './utils'

const ShowNumberButton = ({ phoneNumber }) => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false)

  return (
    <StyledShowNumberButton onClick={() => setShowPhoneNumber((prev) => !prev)}>
      {showPhoneNumber ? (
        <>
          <p>Скрыть телефон</p>
          <span>{convertPhoneNum(phoneNumber)}</span>
        </>
      ) : (
        <>
          <p>Показать телефон</p>
          <span>{maskNumber(phoneNumber)}</span>
        </>
      )}
    </StyledShowNumberButton>
  )
}

export default ShowNumberButton
