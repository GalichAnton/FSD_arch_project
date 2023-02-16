import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from 'shared/config/i18n/i18nForTest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

interface ComponentRenderProps {
  route?: string
}

export function componentRender (component: ReactNode, options: ComponentRenderProps = {}) {
  const { route = '/' } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
          {component}
      </I18nextProvider>
    </MemoryRouter>,
  )
}
