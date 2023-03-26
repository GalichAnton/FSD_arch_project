import React from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Page } from 'widgets/Page/Page'

export const MainPage = () => {
  const { t } = useTranslation()
  return (
    <Page>
      <BugButton/>
      {t('Главная страница')}
    </Page>
  )
}
