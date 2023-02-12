import { fireEvent, screen } from '@testing-library/react'
import { SideBar } from 'widgets/SideBar'
import '@testing-library/jest-dom'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('SideBar', () => {
  test('loads and displays greeting', async () => {
    renderWithTranslation(<SideBar/>)

    expect(screen.getByTestId('sideBar')).toBeInTheDocument()
  })
  test('toggle component', async () => {
    renderWithTranslation(<SideBar/>)
    const toggleBtn = screen.getByTestId('toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sideBar')).toHaveClass('collapsed')
  })
})
