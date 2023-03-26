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
    const mountedReducers = store.reducerManager.getMountedReducers()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKeys]
      // Добавляем новый редюсер только если его нет
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKeys, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })
    return () => {
      if (!removeOnUnmount) return
      Object.keys(reducers).forEach((name) => {
        store.reducerManager.remove(name as StateSchemaKeys)
        dispatch({ type: `@DESTROY ${name} reducer` })
      })
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}
