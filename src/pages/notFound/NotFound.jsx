import { Title } from './NotFound.styled'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation(['home'])

  return <Title>{t('notFound')}</Title>
}

export default NotFound
