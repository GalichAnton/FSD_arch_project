import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 0 } } })

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 0')
  })

  test('increment', () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 0 } } })
    userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 1')
  })

  test('decrement', () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 0 } } })
    userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('value = -1')
  })
})
