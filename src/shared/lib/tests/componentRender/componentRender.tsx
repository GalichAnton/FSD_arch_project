import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from 'shared/config/i18n/i18nForTest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvoder'
import { type DeepPartial } from '@reduxjs/toolkit'

interface ComponentRenderProps {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function componentRender (component: ReactNode, options: ComponentRenderProps = {}) {
  const {
    route = '/',
    initialState,
  } = options

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>
            {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  )
}
