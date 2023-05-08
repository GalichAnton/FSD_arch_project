import React from 'react'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line fsd-arch-plugin/layer-imports
import { BugButton } from '@/app/providers/ErrorBoundary'
import { Page } from '@/widgets/Page'

export const MainPage = () => {
  const { t } = useTranslation()
  return (
    <Page>
      <BugButton/>
      {t('Главная страница')}
    </Page>
  )
}
