import React, { Suspense, useEffect } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { SideBar } from '@/widgets/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from '@/entity/User'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme } = useTheme()

  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar/>
        <div className={'content-page'}>
          <SideBar/>
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
