import { fireEvent, screen } from '@testing-library/react'
import { SideBar } from 'widgets/SideBar'
import '@testing-library/jest-dom'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('SideBar', () => {
  test('loads and displays greeting', async () => {
    componentRender(<SideBar/>)

    expect(screen.getByTestId('sideBar')).toBeInTheDocument()
  })

  test('toggle component', async () => {
    componentRender(<SideBar/>)
    const toggleBtn = screen.getByTestId('toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sideBar')).toHaveClass('collapsed')
  })
})
