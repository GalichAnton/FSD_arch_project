import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema'
import React, { useEffect, type FC } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeOnUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeOnUnmount = true,
  } = props
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKeys, reducer)
      dispatch({ type: `${name}/init` })
    })
    return () => {
      if (!removeOnUnmount) return
      Object.keys(reducers).forEach((name) => {
        store.reducerManager.remove(name as StateSchemaKeys)
        dispatch({ type: `${name}/clear` })
      })
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
