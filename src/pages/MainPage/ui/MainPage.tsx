import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'

export const MainPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <BugButton/>
      {t('Главная страница')}
    </div>
  )
}
