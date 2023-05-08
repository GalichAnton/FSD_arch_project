import React, { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppButton } from '@/shared/ui/AppButton'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }

  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div >
      <h1 data-testid='value-title'>value = {counterValue}</h1>
      <AppButton onClick={handleIncrement} data-testid='increment-btn'>increment</AppButton>
      <AppButton onClick={handleDecrement} data-testid='decrement-btn'>decrement</AppButton>
    </div>
  )
}
