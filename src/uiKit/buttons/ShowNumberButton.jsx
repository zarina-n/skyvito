import { StyledShowNumberButton } from './Button.styled'
import { useState } from 'react'
import { maskNumber, convertPhoneNum } from './utils'
import { useTranslation } from 'react-i18next'

const ShowNumberButton = ({ phoneNumber }) => {
  const { t } = useTranslation(['adPage'])

  const [showPhoneNumber, setShowPhoneNumber] = useState(false)

  return (
    <StyledShowNumberButton onClick={() => setShowPhoneNumber((prev) => !prev)}>
      {showPhoneNumber ? (
        <>
          <p>{t('hidePhoneNumber')}</p>
          <span>{convertPhoneNum(phoneNumber)}</span>
        </>
      ) : (
        <>
          <p>{t('showPhoneNumber')}</p>
          <span>{maskNumber(phoneNumber)}</span>
        </>
      )}
    </StyledShowNumberButton>
  )
}

export default ShowNumberButton
